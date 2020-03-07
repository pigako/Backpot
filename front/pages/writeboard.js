import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Button from '../components/designs/Button';
import Router from 'next/router';

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

const WriteBoard = () => {
  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [text, setText] = useState('');

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

  const onSubmit = useCallback(
    e => {
      console.log(text);
    },
    [text],
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
        <Button onClick={onSubmit}>작성</Button>
      </WriteBoardDivTop>
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
