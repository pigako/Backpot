import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { css, withTheme } from 'styled-components';
import Helmet from 'react-helmet';

import Button from '../components/designs/Button';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

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
const DayDiv = styled.div``;

const DayButton = styled(Button)`
  width: 2rem;
  padding: 0;
  color: black;
  background: #ffffff;
  border: solid 2px #148cff;

  transition: 0.5s ease;

  &:hover {
    background: none;
  }
  &:active {
    background: none;
  }

  ${props => {
    if (props.check) {
      return css`
        color: white;
        background: #148cff;
      `;
    }
  }}
`;

const WriteBook = () => {
  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const dispatch = useDispatch();

  const { thumbnailPath } = useSelector(state => state.book);

  const [bookName, setBookName] = useState('');
  const [serialDay, setSerialDay] = useState({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });
  const { sun, mon, tue, wed, thu, fri, sat } = serialDay;
  const [summaryText, setSummaryText] = useState('');

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChagneImage = useCallback(e => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    console.log(imageFormData);
  }, []);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  const onCancle = useCallback(e => {
    Router.back();
  }, []);

  const onSubmitForm = useCallback(e => {
    e.preventDefault();
  }, []);

  const onChangeDay = useCallback(
    e => {
      setSerialDay({
        ...serialDay,
        [e.target.name]: !!e.target.value,
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
          <Button color="pink" onClick={onCancle}>
            취소
          </Button>
          <Button type="submit">만들기</Button>
        </ButtonDiv>
        <DivCard>
          <DivCardLeft>
            <label>제목</label>
          </DivCardLeft>
          <DivCardRight>
            <input type="text"></input>
          </DivCardRight>
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
              <div></div>
            ) : (
              <Button onClick={onClickImageUpload}>업로드</Button>
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
                value={sun}
                onClick={onChangeDay}
                check={sun}
              >
                일
              </DayButton>
              <DayButton
                name="mon"
                value={mon}
                onClick={onChangeDay}
                check={mon}
              >
                월
              </DayButton>
              <DayButton
                name="tue"
                value={tue}
                onClick={onChangeDay}
                check={tue}
              >
                화
              </DayButton>
              <DayButton
                name="wed"
                value={wed}
                onClick={onChangeDay}
                check={wed}
              >
                수
              </DayButton>
              <DayButton
                name="thu"
                value={thu}
                onClick={onChangeDay}
                check={thu}
              >
                목
              </DayButton>
              <DayButton
                name="fri"
                value={fri}
                onClick={onChangeDay}
                check={fri}
              >
                금
              </DayButton>
              <DayButton
                name="sat"
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

export default WriteBook;

// arr.reduce((acc, cur) => acc.concat(cur), []).join(',')
