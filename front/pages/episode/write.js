import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import Router from 'next/router';

import Button from '../../components/designs/Button';
import { LOAD_BOOK_REQUEST } from '../../reducers/book';
import {
  ADD_EPISODE_REQUEST,
  CHANGE_ADDEDEPISODE,
} from '../../reducers/episode';

const WriteEpisodeDiv = styled.div`
  width: 98%;
  margin: 1rem 0rem 0rem 1rem;
`;

const WriteEpisodeTopDiv = styled.div`
  position: relative;

  margin-bottom: 2rem;
`;

const BookTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TopButtonDiv = styled.div`
  position: absolute;
  top: 5%;
  right: 1%;
`;

const EpisodeForm = styled.form``;

const WriteEpisodeContentDiv = styled.div`
  margin: 1.5rem;
`;

const DivCard = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  width: 100%;
`;
const DivCardLeft = styled.div`
  flex: 1;
`;
const DivCardRight = styled.div`
  flex: 4;
  display: flex;

  & > input {
    width: calc(100% - 2rem);
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

const CheckBox = styled.input`
  width: 1.5rem !important;
  height: 1.5rem !important;
`;

const WriteEditorDiv = styled.div`
  margin: 1rem;
  & > label {
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px #495057;
  }
`;

const Write = () => {
  const { book } = useSelector(state => state.book);
  const { isAddingEpisode, isAddedEpisode } = useSelector(
    state => state.episode,
  );

  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  const dispatch = useDispatch();

  const [checkNotice, setCheckNotice] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [writerComment, setWriterComment] = useState('');

  const onChangeCheckNotice = useCallback(() => {
    setCheckNotice(!checkNotice);
  }, [checkNotice]);

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  useEffect(() => {
    if (isAddedEpisode) {
      dispatch({
        type: CHANGE_ADDEDEPISODE,
      });
      Router.push(
        { pathname: `/book`, query: { bookid: book.id } },
        `/book/${book.id}`,
      );
    }
  }, [isAddedEpisode]);

  const onCancleWrite = useCallback(() => {
    Router.back();
  }, []);

  const onWriteEpisode = useCallback(
    e => {
      e.preventDefault();
      const episodeContent =
        text +
        '<br/><br/><p><strong>작가의 말</strong><hr><br/>' +
        writerComment;

      dispatch({
        type: ADD_EPISODE_REQUEST,
        data: {
          title: title,
          content: episodeContent,
          notice: checkNotice ? 1 : 0,
          bookId: book && book.id,
        },
      });
    },
    [checkNotice, title, text, writerComment, book && book.id],
  );

  return (
    <WriteEpisodeDiv>
      <Helmet>
        <title>{book && book.name}</title>
        <style type="text/css">
          {`
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `}
        </style>
      </Helmet>
      <EpisodeForm onSubmit={onWriteEpisode}>
        <WriteEpisodeTopDiv>
          <BookTitle>
            {book &&
              book.name +
                '  ' +
                (book.Episodes.filter(v => v.isNotice !== 1).length + 1) +
                '번째 글'}
          </BookTitle>
          <TopButtonDiv>
            <Button color="pink" type="button" onClick={onCancleWrite}>
              취소
            </Button>
            <Button type="submit">작성</Button>
          </TopButtonDiv>
        </WriteEpisodeTopDiv>
        <WriteEpisodeContentDiv>
          <DivCard>
            <DivCardLeft>
              <label>이 글을 공지로 작성</label>
            </DivCardLeft>
            <DivCardRight>
              <CheckBox
                type="checkbox"
                value={checkNotice}
                onChange={onChangeCheckNotice}
              />
            </DivCardRight>
          </DivCard>
          <DivCard>
            <DivCardLeft>
              <label>제목</label>
            </DivCardLeft>
            <DivCardRight>
              <input type="text" value={title} onChange={onChangeTitle} />
            </DivCardRight>
          </DivCard>

          <WriteEditorDiv>
            <label>본문</label>
            {editorLoded ? (
              <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setText(data);
                }}
              />
            ) : (
              <p>Editor Loding</p>
            )}
          </WriteEditorDiv>
          <WriteEditorDiv>
            <label>작가의 말</label>
            {editorLoded ? (
              <CKEditor
                editor={ClassicEditor}
                data={writerComment}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setWriterComment(data);
                }}
              />
            ) : (
              <p>Editor Loding</p>
            )}
          </WriteEditorDiv>
        </WriteEpisodeContentDiv>
      </EpisodeForm>
    </WriteEpisodeDiv>
  );
};

Write.getInitialProps = async context => {
  const bookId = context.query.bookid;

  context.store.dispatch({
    type: LOAD_BOOK_REQUEST,
    id: bookId,
  });
};

export default Write;
