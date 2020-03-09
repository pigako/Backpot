import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Button from '../components/designs/Button';
import Router from 'next/router';
import { LOAD_BOARD_REQUEST } from '../reducers/board';

const SBoard = styled.div`
  margin-top: 10px;
  width: 98%;
`;
const SDetailBoardTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;
const SBoardTop = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 2px #6441a5;
`;
const SBoardTitle = styled.div`
  display: inline-block;
`;
const SBoardTitleLabel = styled.label`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const SBoardWriterLabel = styled.label`
  padding-right: 1rem;
  border-right: solid 1px #495057;
  & > strong {
    font-weight: bold;
  }
`;
const SBoardCreateLabel = styled.label`
  padding-left: 1rem;
`;
const SBoardTitleButtonDiv = styled.div`
  float: right;
`;
const SBoardContent = styled.div`
  margin: 1.5rem;

  & > p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
const SBoardComment = styled.div`
  border-top: solid 3px #6441a5;
`;
const SBoardCommentCountDiv = styled.div`
  height: 2rem;
  background: #e7e7e7;
  display: flex;
  align-items: center;
  border-bottom: solid 3px #6441a5;
  & > label {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;
const CommentCard = styled.div`
  margin: 1.5rem;
`;
const CommentCardTop = styled.div`
  height: 2rem;
  background: #f7f7f7;
  border-bottom: solid 1px #6441a5;
  display: inline-block;
  width: 100%;

  & > label {
    line-height: 2rem;
  }
`;
const CommentCardNickname = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
`;
const CommentCardCreateLabel = styled.label`
  display: block;
  float: right;
`;
const CommentCardContent = styled.div`
  margin: 1.5rem;
  & > p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const DetailBoard = () => {
  const board = useSelector(state => state.board.board);
  const { id: myId } = useSelector(state => state.user.me) || '';
  const onUpdateBoard = useCallback(e => {}, []);

  const onDeleteBoard = useCallback(e => {}, []);

  return (
    <SBoard>
      <SDetailBoardTitle>추천게시글</SDetailBoardTitle>
      <SBoardTop>
        <SBoardTitle>
          <SBoardTitleLabel>{board && board.title}</SBoardTitleLabel>
          <SBoardWriterLabel>
            <strong>{board && board.User.nickname}</strong> 님
          </SBoardWriterLabel>
          <SBoardCreateLabel>
            {moment(board && board.createdAt).format('YY.MM.DD HH시 mm분')}
          </SBoardCreateLabel>
        </SBoardTitle>
        {myId === (board && board.User.id) ? (
          <SBoardTitleButtonDiv>
            <Button onClick={onUpdateBoard}>수정</Button>
            <Button color={'pink'} onClick={onDeleteBoard}>
              삭제
            </Button>
          </SBoardTitleButtonDiv>
        ) : null}
      </SBoardTop>
      <SBoardContent>
        <p dangerouslySetInnerHTML={{ __html: board && board.content }} />
      </SBoardContent>
      <SBoardComment>
        <SBoardCommentCountDiv>
          <label>댓글 {board && board.Comments.length}개</label>
        </SBoardCommentCountDiv>

        {board &&
          board.Comments.map(comment => {
            return (
              <CommentCard key={+comment.id}>
                <CommentCardTop>
                  <CommentCardNickname>
                    {comment.User.nickname}
                  </CommentCardNickname>
                  <CommentCardCreateLabel>
                    {moment(comment.createdAt).format('YY.MM.DD HH시 mm분')}
                  </CommentCardCreateLabel>
                </CommentCardTop>
                <CommentCardContent>
                  <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
                </CommentCardContent>
              </CommentCard>
            );
          })}
      </SBoardComment>
    </SBoard>
  );
};

DetailBoard.getInitialProps = context => {
  const id = parseInt(context.query.id, 10);
  context.store.dispatch({
    type: LOAD_BOARD_REQUEST,
    boardId: id,
  });
};

export default DetailBoard;
