import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import Router from 'next/router';

import Button from '../../components/designs/Button';
import {
  UPDATE_EPISODE_REQUEST,
  CHANGE_UPDATEDEPISODE,
  LOAD_EPISODE_REQUEST,
} from '../../reducers/episode';

const UpdateEpisodeDiv = styled.div`
  width: 98%;
  margin: 1rem 0rem 0rem 1rem;
`;

const UpdateEpisodeTopDiv = styled.div`
  position: relative;

  margin-bottom: 2rem;
`;

const BookTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TopButtonDiv = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  right: 1%;
`;

const EpisodeForm = styled.form``;

const UpdateEpisodeContentDiv = styled.div`
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

const UpdateEditorDiv = styled.div`
  margin: 1rem;
  & > label {
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px #495057;
  }
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const Update = () => {
  const { episode, isUpdatingEpisode, isUpdatedEpisode } = useSelector(
    state => state.episode,
  );

  const dispatch = useDispatch();

  const [checkNotice, setCheckNotice] = useState(
    episode && episode.isNotice === 1 ? true : false,
  );
  const [title, setTitle] = useState(episode && episode.title);
  const [text, setText] = useState(
    episode &&
      episode.content.split(
        '<br/><br/><p><strong>작가의 말</strong><hr><br/>',
      )[0],
  );
  const [writerComment, setWriterComment] = useState(
    (episode &&
      episode.content.split(
        '<br/><br/><p><strong>작가의 말</strong><hr><br/>',
      )[1]) ||
      '',
  );

  const onChangeCheckNotice = useCallback(() => {
    setCheckNotice(!checkNotice);
  }, [checkNotice]);

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const editorRef = useRef();
  const [editorLoded, setEditorLoded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  useEffect(() => {
    if (isUpdatedEpisode) {
      dispatch({
        type: CHANGE_UPDATEDEPISODE,
      });
      Router.push(
        { pathname: `/episode`, query: { id: episode.id } },
        `/episode/${episode.id}`,
      );
    }
  }, [isUpdatedEpisode, episode && episode.id]);

  const onCancleUpdate = useCallback(() => {
    Router.back();
  }, []);

  //
  const onWriteEpisode = useCallback(
    e => {
      e.preventDefault();
      const episodeContent =
        text +
        '<br/><br/><p><strong>작가의 말</strong><hr><br/>' +
        writerComment;
      dispatch({
        type: UPDATE_EPISODE_REQUEST,
        data: {
          id: episode && episode.id,
          title: title,
          content: episodeContent,
          notice: checkNotice ? 1 : 0,
        },
      });
    },
    [episode && episode.id, checkNotice, title, text, writerComment],
  );

  return (
    <UpdateEpisodeDiv>
      <Helmet>
        <title>{episode && episode.title}</title>
        <style type="text/css">
          {`
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `}
        </style>
      </Helmet>
      <EpisodeForm onSubmit={onWriteEpisode}>
        <UpdateEpisodeTopDiv>
          <BookTitle>{episode && episode.title}</BookTitle>
          <TopButtonDiv>
            <Button color="pink" type="button" onClick={onCancleUpdate}>
              취소
            </Button>
            <Button type="submit">
              {isUpdatingEpisode ? (
                <LoadingImg src="/static/icons/loading_blue.gif" />
              ) : (
                '수정'
              )}
            </Button>
          </TopButtonDiv>
        </UpdateEpisodeTopDiv>
        <UpdateEpisodeContentDiv>
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

          <UpdateEditorDiv>
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
          </UpdateEditorDiv>
          <UpdateEditorDiv>
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
          </UpdateEditorDiv>
        </UpdateEpisodeContentDiv>
      </EpisodeForm>
    </UpdateEpisodeDiv>
  );
};

Update.getInitialProps = async context => {
  const episodeId = context.query.episodeid;

  context.store.dispatch({
    type: LOAD_EPISODE_REQUEST,
    id: episodeId,
  });
};

export default Update;
