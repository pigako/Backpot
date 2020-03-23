import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Helmet from 'react-helmet';
import Router from 'next/router';

import { LOAD_EPISODE_REQUEST } from '../reducers/episode';
import CommnetCard from '../components/CommentCard';
import Button from '../components/designs/Button';

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

const Episode = () => {
  const { episode } = useSelector(state => state.episode);
  const { id: myId } = useSelector(state => state.user.me) || '';

  const onGoList = useCallback(() => {
    Router.push(
      { pathname: `/book`, query: { bookid: episode.Book.id } },
      `/book/${episode.Book.id}`,
    );
  }, []);

  const onUpdateEpisode = useCallback(() => {}, []);
  const onDeleteEpisode = useCallback(() => {}, []);
  const onRecommenmdEpisode = useCallback(() => {}, []);

  const onGoPrevEpisode = useCallback(() => {
    if (!episode.prev) {
      return alert('이전글이 존재하지 않습니다.');
    }
    Router.push(
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
    Router.push(
      {
        pathname: '/episode',
        query: { id: episode.next.id },
      },
      `/episode/${episode.next.id}`,
    );
  }, [episode && episode.next && episode.next.id]);

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
              삭제
            </Button>
          ) : null}
          {myId ? <Button onClick={onRecommenmdEpisode}>추천</Button> : null}
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
            return <CommnetCard key={+comment.id} comment={comment} />;
          })}
      </EpisodeComment>
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
