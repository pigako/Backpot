import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Button from '../components/designs/Button';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_BOARD_REQUEST } from '../reducers/board';

const WriteDiv = styled.div`
  margin-top: 10px;
  width: 98%;
`;

const WriteBoardDivTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SWriteBoardTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;

const BoardTitleInput = styled.input`
  margin-right: 10px;
  border: solid 1px #495057;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 1rem;

  height: 2.25rem;
  width: 100%;
  font-size: 1.5rem;

  transition: 0.55s ease;

  & :hover {
    border: solid 2px #148cff;
  }
  & :focus {
    border: solid 2px #148cff;
  }
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const WriteBoard = () => {
  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const { isAddingBoard, boardAdded } = useSelector(state => state.board);
  const dispatch = useDispatch();

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  useEffect(() => {
    if (boardAdded) {
      Router.push('/board');
    }
  }, [boardAdded]);

  const onCancle = useCallback(e => {
    Router.back();
  }, []);

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  });

  const onCreateBoard = useCallback(
    e => {
      dispatch({
        type: ADD_BOARD_REQUEST,
        data: {
          title,
          text,
        },
      });
    },
    [title, text],
  );

  return (
    <WriteDiv>
      <Helmet>
        <title>추천게시글 작성</title>
        <style type="text/css">
          {`
            .ck-editor__editable { height: 500px;}
          `}
        </style>
      </Helmet>
      <WriteBoardDivTop>
        <SWriteBoardTitle>추천게시글 작성</SWriteBoardTitle>
        <Button color={'pink'} onClick={onCancle}>
          취소
        </Button>
        <Button onClick={onCreateBoard}>
          {isAddingBoard ? (
            <LoadingImg src="/static/icons/loading_blue.gif" />
          ) : (
            `작성`
          )}
        </Button>
      </WriteBoardDivTop>
      <BoardTitleInput value={title} onChange={onChangeTitle} />
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
    </WriteDiv>
  );
};

WriteBoard.getInitialProps = context => {};

export default WriteBoard;
