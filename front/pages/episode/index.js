import React, { useCallback, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Helmet from 'react-helmet';
import { useRouter } from 'next/router';

import {
  LOAD_EPISODE_REQUEST,
  ADD_RECOMMEND_REQUEST,
  DELETE_EPISODE_REQUEST,
  CHANGE_DELETEDEPISODE,
  ADD_EPISODE_COMMENT_REQUEST,
} from '../../reducers/episode';
import EpisodeCommentCard from '../../components/EpisodeCommentCard';
import Button from '../../components/designs/Button';

const EpisodeDiv = styled.div`
  width: 98%;
  margin: 1rem 0rem 0rem 1rem;
`;
const EpisodeTopDiv = styled.div`
  border-bottom: solid 2px #495057;
  position: relative;
`;
const BookTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const EpisodeTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const TopButtonDiv = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  right: 1%;
`;
const EpisodeSummaryDataDiv = styled.div`
  border-bottom: solid 2px #495057;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const EpisodeSummaryContentDiv = styled.div`
  padding: 1rem;
  font-size: 1rem;
`;
const LeftLabel = styled.label`
  margin-right: 1rem;
`;
const RightLabel = styled.label`
  font-weight: bold;
`;
const EpisodeContentDiv = styled.div`
  margin: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const EpisodeComment = styled.div`
  border-top: solid 3px #495057;
  margin-bottom: 2rem;
`;
const EpisodeCommentCountDiv = styled.div`
  height: 2rem;
  background: #e7e7e7;
  display: flex;
  align-items: center;
  border-bottom: solid 3px #495057;
  & > label {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;
const EpisodePrevNextDiv = styled.div`
  height: 8rem;
  width: 100%;

  border-top: solid 2px #495057;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const PrevEpisodeDiv = styled.div`
  width: 49.5%;
  display: inline-block;
`;
const PrevButton = styled(Button)`
  height: 8rem;
  display: inline-block;
`;
const PrveEpisodeTitle = styled.label`
  margin-left: 1rem;
`;
const NextEpisodeDiv = styled.div`
  width: 49.5%;
  float: right;
  display: flex;

  align-items: center;
  justify-content: flex-end;
`;
const NextButton = styled(Button)`
  height: 8rem;
  display: block;
  float: right;
`;
const NextEpisodeTitle = styled.label`
  margin-right: 1rem;
`;
const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;
const CommentDiv = styled.div`
  height: 330px;
`;

const CommentButton = styled(Button)`
  width: 8rem;
  margin-right: 1.5rem;
  float: right;
`;

const Episode = () => {
  const {
    episode,
    isDeletingEpisode,
    isDeletedEpisode,
    isRecommending,
    isAddingComment,
    commentAdded,
  } = useSelector(state => state.episode);
  const { id: myId } = useSelector(state => state.user.me) || '';

  const [userComment, setUserComment] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoded, setEditorLoded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  const onGoList = useCallback(() => {
    router.push(
      { pathname: `/book`, query: { bookid: episode.Book.id } },
      `/book/${episode.Book.id}`,
    );
  }, [episode && episode.Book]);

  const onUpdateEpisode = useCallback(() => {
    router.push(
      {
        pathname: `/episode/update`,
        query: { episodeid: episode.id },
      },
      `/episode/update/${episode.id}`,
    );
  }, [episode && episode.id]);

  const onDeleteEpisode = useCallback(() => {
    dispatch({
      type: DELETE_EPISODE_REQUEST,
      id: episode.id,
    });
  }, [episode && episode.id]);

  useEffect(() => {
    if (isDeletedEpisode) {
      dispatch({
        type: CHANGE_DELETEDEPISODE,
      });
      router.push(
        { pathname: `/book`, query: { bookid: episode.Book.id } },
        `/book/${episode.Book.id}`,
      );
    }
  }, [isDeletedEpisode, episode && episode.Book]);

  const onRecommenmdEpisode = useCallback(() => {
    dispatch({
      type: ADD_RECOMMEND_REQUEST,
      id: episode.id,
    });
  }, [episode && episode.id]);

  const onGoPrevEpisode = useCallback(() => {
    if (!episode.prev) {
      return alert('이전글이 존재하지 않습니다.');
    }
    router.push(
      {
        pathname: '/episode',
        query: { id: episode.prev.id },
      },
      `/episode/${episode.prev.id}`,
    );
  }, [episode && episode.prev && episode.prev.id]);

  const onGoNextEpisode = useCallback(() => {
    if (!episode.next) {
      return alert('다음글이 존재하지 않습니다.');
    }
    router.push(
      {
        pathname: '/episode',
        query: { id: episode.next.id },
      },
      `/episode/${episode.next.id}`,
    );
  }, [episode && episode.next && episode.next.id]);

  const onCreateComment = useCallback(
    e => {
      if (!userComment.trim()) {
        return;
      }
      dispatch({
        type: ADD_EPISODE_COMMENT_REQUEST,
        data: {
          episodeId: episode.id,
          content: userComment,
        },
      });
    },
    [episode && episode.id, userComment],
  );

  useEffect(() => {
    if (commentAdded) {
      setUserComment('');
    }
  }, [commentAdded]);

  return (
    <EpisodeDiv>
      <Helmet>
        <title>{episode && episode.Book.name}</title>
        <style type="text/css">
          {`
            .ck-editor__editable { height: 200px;}
            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}
          `}
        </style>
      </Helmet>
      <EpisodeTopDiv>
        <BookTitle>{episode && episode.Book.name}</BookTitle>
        <EpisodeTitle>{episode && episode.title}</EpisodeTitle>
        <TopButtonDiv>
          {episode && episode.Book.User.id === myId ? (
            <Button onClick={onUpdateEpisode}>수정</Button>
          ) : null}
          {episode && episode.Book.User.id === myId ? (
            <Button color="pink" onClick={onDeleteEpisode}>
              {isDeletingEpisode ? (
                <LoadingImg src="/static/icons/loading_pink.gif" />
              ) : (
                '삭제'
              )}
            </Button>
          ) : null}
          {myId ? (
            <Button onClick={onRecommenmdEpisode}>
              {isRecommending ? (
                <LoadingImg src="/static/icons/loading_blue.gif" />
              ) : (
                '추천'
              )}
            </Button>
          ) : null}
          <Button onClick={onGoList}>목록</Button>
          <Button>
            <a href="#comment">댓글</a>
          </Button>
        </TopButtonDiv>
      </EpisodeTopDiv>
      <EpisodeSummaryDataDiv>
        <EpisodeSummaryContentDiv>
          <LeftLabel>작성</LeftLabel>
          <RightLabel>
            {episode && moment(episode.createdAt).format('YY.MM.DD HH:mm')}
          </RightLabel>
        </EpisodeSummaryContentDiv>
        <EpisodeSummaryContentDiv>
          <LeftLabel>조회</LeftLabel>
          <RightLabel>{episode && episode.views}</RightLabel>
        </EpisodeSummaryContentDiv>
        <EpisodeSummaryContentDiv>
          <LeftLabel>추천</LeftLabel>
          <RightLabel>{episode && episode.recommends}</RightLabel>
        </EpisodeSummaryContentDiv>
        <EpisodeSummaryContentDiv>
          <LeftLabel>작가</LeftLabel>
          <RightLabel>{episode && episode.Book.User.nickname}</RightLabel>
          {' 님'}
        </EpisodeSummaryContentDiv>
      </EpisodeSummaryDataDiv>
      <EpisodeContentDiv
        dangerouslySetInnerHTML={{ __html: episode && episode.content }}
      />
      <EpisodePrevNextDiv>
        <PrevEpisodeDiv>
          <PrevButton onClick={onGoPrevEpisode}>{'< Prev'}</PrevButton>
          <PrveEpisodeTitle>
            {(episode && episode.prev && episode.prev.title) ||
              '이전글이 존재하지 않습니다.'}
          </PrveEpisodeTitle>
        </PrevEpisodeDiv>
        <NextEpisodeDiv>
          <NextEpisodeTitle>
            {(episode && episode.next && episode.next.title) ||
              '다음글이 존재하지 않습니다.'}
          </NextEpisodeTitle>
          <NextButton onClick={onGoNextEpisode}>{'Next >'}</NextButton>
        </NextEpisodeDiv>
      </EpisodePrevNextDiv>
      <EpisodeComment id="comment">
        <EpisodeCommentCountDiv>
          <label>댓글 {episode && episode.Episode_Comments.length}개</label>
        </EpisodeCommentCountDiv>

        {episode &&
          episode.Episode_Comments.map(comment => {
            return <EpisodeCommentCard key={+comment.id} comment={comment} />;
          })}
      </EpisodeComment>

      {myId && (
        <CommentDiv>
          {editorLoded ? (
            <CKEditor
              key={'comment'}
              editor={ClassicEditor}
              data={userComment}
              onChange={(event, editor) => {
                const data = editor.getData();
                setUserComment(data);
              }}
            />
          ) : (
            <p>Editor Loding</p>
          )}
          <CommentButton onClick={onCreateComment}>
            {isAddingComment ? (
              <LoadingImg src="/static/icons/loading_blue.gif" />
            ) : (
              `댓글쓰기`
            )}
          </CommentButton>
        </CommentDiv>
      )}
    </EpisodeDiv>
  );
};

Episode.getInitialProps = async context => {
  const id = context.query.id;

  context.store.dispatch({
    type: LOAD_EPISODE_REQUEST,
    id,
  });
};

export default Episode;
