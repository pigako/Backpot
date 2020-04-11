import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Helmet from 'react-helmet';

import Button from '../components/designs/Button';
import {
  UPLOAD_IMAGE_REQUEST,
  REMOVE_IMAGE,
  ADD_BOOK_REQUEST,
  CHANGE_ADDEDBOOK,
  LOAD_GENRE_REQUEST,
} from '../reducers/book';

const SWriteBookDiv = styled.div`
  width: 98%;
  margin: 1rem 0rem 0rem 1rem;
`;

const SWriteBookTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;

const FormBook = styled.form``;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DivCard = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  width: 80%;
`;
const DivCardLeft = styled.div`
  flex: 1;
`;
const DivCardRight = styled.div`
  flex: 4;
  display: flex;

  & > input {
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    padding-left: 10px;

    border: solid 2px #495057;
    border-radius: 4px;

    transition: 0.55s ease;
    & :hover {
      border: solid 2px #148cff;
    }
    & :focus {
      border: solid 2px #148cff;
    }
  }
`;

const GenreDiv = styled.div`
  display: block;
  flex: 4;
`;

const GenreButton = styled(Button)`
  display: block;
  width: 7.5rem;
  float: left;
  color: black;
  background: white;
  border: solid 2px #148cff;

  &:hover {
    color: white;
  }
  &:active {
    color: white;
  }

  margin: 10px 10px 0px 0px;

  & + & {
    margin-left: 0px;
  }

  ${(props) => {
    if (props.check) {
      return css`
        color: white;
        background: #148cff;
      `;
    }
  }}
`;

const ThumbnailDiv = styled.div`
  display: inline-block;
  & > img {
    width: 200px;
  }
  & > div {
    display: flex;
    justify-content: center;
  }
`;
const DayDiv = styled.div``;

const DayButton = styled(Button)`
  width: 2rem;
  padding: 0;
  color: black;
  background: #ffffff;
  border: solid 2px #148cff;

  transition: 0.5s ease;

  &:hover {
    color: white;
  }
  &:active {
    color: white;
  }

  ${(props) => {
    if (props.check) {
      return css`
        color: white;
        background: #148cff;
      `;
    }
  }}
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const WriteBook = () => {
  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const dispatch = useDispatch();
  const router = useRouter();

  const { thumbnailPath, isAddingBook, isAddedBook } = useSelector(
    (state) => state.book,
  );

  const [bookName, setBookName] = useState('');
  const { genre } = useSelector((state) => state.book);
  const [genreArr, setGenreArr] = useState([]);
  const [serialDay, setSerialDay] = useState({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });
  const dayName = {
    sun: '일',
    mon: '월',
    tue: '화',
    wed: '수',
    thu: '목',
    fri: '금',
    sat: '토',
  };
  const { sun, mon, tue, wed, thu, fri, sat } = serialDay;
  const [summaryText, setSummaryText] = useState('');

  const imageInput = useRef();

  useEffect(() => {
    console.log('====');
    console.log(imageInput.current.value);
    console.log('===');
  }, [imageInput.current]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChagneImage = useCallback((e) => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    console.log(imageFormData);
    dispatch({
      type: UPLOAD_IMAGE_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveThumbnail = useCallback(() => {
    dispatch({
      type: REMOVE_IMAGE,
    });
    imageInput.current.value = null;
  }, [imageInput.current]);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  const onChangeBookName = useCallback((e) => {
    setBookName(e.target.value);
  }, []);

  const onClickGenreButton = useCallback(
    (id) => (e) => {
      if (genreArr.includes(id)) {
        setGenreArr(genreArr.filter((g) => g !== id));
      } else {
        setGenreArr([...genreArr, id]);
      }
    },
    [genreArr],
  );

  const onCancle = useCallback(() => {
    router.back();
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const serialDayJoin = Object.keys(serialDay)
        .reduce(
          (acc, cur) => (serialDay[cur] ? acc.concat(dayName[cur]) : acc),
          [],
        )
        .join(',');
      dispatch({
        type: ADD_BOOK_REQUEST,
        data: {
          name: bookName,
          thumbnail: thumbnailPath,
          serialDay: serialDayJoin,
          summary: summaryText,
          genre: genreArr,
        },
      });
    },
    [bookName, thumbnailPath, serialDay, summaryText, genreArr],
  );

  useEffect(() => {
    if (isAddedBook) {
      console.log(imageInput);
      console.log(imageInput.current);
      console.log(imageInput.current.value);
      imageInput.current.value = null;
      console.log(imageInput.current.value);

      dispatch({
        type: CHANGE_ADDEDBOOK,
      });
      router.back();
    }
  }, [imageInput.current, isAddedBook]);

  const onChangeDay = useCallback(
    (e) => {
      setSerialDay({
        ...serialDay,
        [e.target.name]: !serialDay[e.target.name],
      });
    },
    [serialDay],
  );

  return (
    <SWriteBookDiv>
      <Helmet>
        <title>새 작품</title>
        <style type="text/css">
          {`
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `}
        </style>
      </Helmet>
      <SWriteBookTitle>새 연재작품 만들기</SWriteBookTitle>
      <FormBook onSubmit={onSubmitForm}>
        <ButtonDiv>
          <Button type="button" color="pink" onClick={onCancle}>
            취소
          </Button>
          <Button type="submit">
            {isAddingBook ? (
              <LoadingImg src="/static/icons/loading_blue.gif" />
            ) : (
              `만들기`
            )}
          </Button>
        </ButtonDiv>
        <DivCard>
          <DivCardLeft>
            <label>제목</label>
          </DivCardLeft>
          <DivCardRight>
            <input
              type="text"
              value={bookName}
              onChange={onChangeBookName}
            ></input>
          </DivCardRight>
        </DivCard>
        <DivCard>
          <DivCardLeft>
            <label>장르</label>
          </DivCardLeft>
          <GenreDiv>
            {genre.map((g) => {
              return (
                <GenreButton
                  key={+g.id}
                  type="button"
                  onClick={onClickGenreButton(+g.id)}
                  check={genreArr.includes(+g.id)}
                >
                  {g.name}
                </GenreButton>
              );
            })}
          </GenreDiv>
        </DivCard>
        <DivCard>
          <DivCardLeft>
            <label>썸네일</label>
          </DivCardLeft>
          <DivCardRight>
            <input
              type="file"
              hidden
              ref={imageInput}
              onChange={onChagneImage}
            />
            {thumbnailPath ? (
              <ThumbnailDiv>
                <img src={`${thumbnailPath}`} />
                <div>
                  <Button type="button" onClick={onRemoveThumbnail}>
                    제거
                  </Button>
                </div>
              </ThumbnailDiv>
            ) : (
              <Button type="button" onClick={onClickImageUpload}>
                업로드
              </Button>
            )}
          </DivCardRight>
        </DivCard>
        <DivCard>
          <DivCardLeft>
            <label>연재요일</label>
          </DivCardLeft>
          <DivCardRight>
            <DayDiv>
              <DayButton
                name="sun"
                type="button"
                value={sun}
                onClick={onChangeDay}
                check={sun}
              >
                일
              </DayButton>
              <DayButton
                name="mon"
                type="button"
                value={mon}
                onClick={onChangeDay}
                check={mon}
              >
                월
              </DayButton>
              <DayButton
                name="tue"
                type="button"
                value={tue}
                onClick={onChangeDay}
                check={tue}
              >
                화
              </DayButton>
              <DayButton
                name="wed"
                type="button"
                value={wed}
                onClick={onChangeDay}
                check={wed}
              >
                수
              </DayButton>
              <DayButton
                name="thu"
                type="button"
                value={thu}
                onClick={onChangeDay}
                check={thu}
              >
                목
              </DayButton>
              <DayButton
                name="fri"
                type="button"
                value={fri}
                onClick={onChangeDay}
                check={fri}
              >
                금
              </DayButton>
              <DayButton
                name="sat"
                type="button"
                value={sat}
                onClick={onChangeDay}
                check={sat}
              >
                토
              </DayButton>
            </DayDiv>
          </DivCardRight>
        </DivCard>
        <DivCard>
          <DivCardLeft>
            <label>작품설명</label>
          </DivCardLeft>
          <DivCardRight>
            {editorLoded ? (
              <CKEditor
                editor={ClassicEditor}
                data={summaryText}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setSummaryText(data);
                }}
              />
            ) : (
              <p>Editor Loding</p>
            )}
          </DivCardRight>
        </DivCard>
      </FormBook>
    </SWriteBookDiv>
  );
};

WriteBook.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_GENRE_REQUEST,
  });
};

export default WriteBook;
