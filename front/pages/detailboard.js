import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Button from '../components/designs/Button';
import Router from 'next/router';

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
`;
const SBoardComment = styled.div`
  border-top: solid 3px #6441a5;
`;

const DetailBoard = ({ board }) => {
  const onUpdateBoard = useCallback(e => {}, []);

  const onDeleteBoard = useCallback(e => {}, []);

  return (
    <SBoard>
      <SDetailBoardTitle>추천게시글</SDetailBoardTitle>
      <SBoardTop>
        <SBoardTitle>
          <SBoardTitleLabel>{board.title}</SBoardTitleLabel>
          <SBoardWriterLabel>
            <strong>{board.User.nickname}</strong> 님
          </SBoardWriterLabel>
          <SBoardCreateLabel>
            {moment(board.createdAt).format('YY.MM.DD HH시 mm분')}
          </SBoardCreateLabel>
        </SBoardTitle>
        <SBoardTitleButtonDiv>
          <Button onClick={onUpdateBoard}>수정</Button>
          <Button color={'pink'} onClick={onDeleteBoard}>
            삭제
          </Button>
        </SBoardTitleButtonDiv>
      </SBoardTop>
      <SBoardContent>
        <p dangerouslySetInnerHTML={{ __html: board.content }} />
      </SBoardContent>
      <SBoardComment></SBoardComment>
    </SBoard>
  );
};

DetailBoard.propTypes = {
  board: PropTypes.object.isRequired,
};

DetailBoard.getInitialProps = context => {
  const id = parseInt(context.query.id, 10);
  const state = context.store.getState();
  const board = state.board && state.board.boards.find(v => v.id === id);
  return { board };
};

export default DetailBoard;
