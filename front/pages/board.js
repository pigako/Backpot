import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/designs/Button';
import BoardTable from '../components/BoardTable';
import { LOAD_BOARDS_REQUEST, CHANGE_BOARD_KEYWORD } from '../reducers/board';

const SBoard = styled.div`
  margin-top: 10px;
`;
const BoardDivTop = styled.div`
  display: flex;
  align-items: center;
`;

const SBoardTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 200px;
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;

  width: 99%;

  & a {
    color: white;
    height: 50px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  margin-right: 10px;
  border: solid 2px #000000;
  border-radius: 4px;
  padding-left: 10px;

  height: 2.25rem;
  width: 10rem;
  font-size: 1.5rem;

  transition: 0.55s ease;

  & :hover {
    width: 30rem;
  }
  & :focus {
    width: 30rem;
  }
`;

const PageButtonDiv = styled.div``;

const Board = () => {
  const { boards, hasMoreBoards } = useSelector(state => state.board);
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [lastIdArray, setLastIdArray] = useState([]);
  const [keyword, setKeyword] = useState('');

  const onScroll = useCallback(
    e => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMoreBoards) {
          let lastId = boards[boards.length - 1].id;
          if (!lastIdArray.includes(lastId)) {
            dispatch({
              type: LOAD_BOARDS_REQUEST,
              lastId,
              keyword,
            });
            setLastIdArray([...lastIdArray, lastId]);
          }
        }
      }
    },
    [hasMoreBoards, boards.length, keyword],
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      setLastIdArray([]);
    };
  }, [boards.length]);

  const onCreateBoard = useCallback(e => {
    router.push('/writeboard');
  }, []);

  const onChangeKeyword = useCallback(e => {
    setKeyword(e.target.value);
  }, []);

  const onSearchBoard = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: CHANGE_BOARD_KEYWORD,
        data: keyword,
      });
      dispatch({
        type: LOAD_BOARDS_REQUEST,
        lastId: 0,
        keyword,
      });
    },
    [keyword],
  );

  return (
    <SBoard>
      <BoardDivTop>
        <SBoardTitle>추천 게시판</SBoardTitle>
        {me && <Button onClick={onCreateBoard}>글쓰기</Button>}
        <SearchForm>
          <SearchInput value={keyword} onChange={onChangeKeyword}></SearchInput>
          <Button onClick={onSearchBoard}>검색</Button>
        </SearchForm>
      </BoardDivTop>
      {boards && <BoardTable board={boards} />}
      {boards && <PageButtonDiv></PageButtonDiv>}
    </SBoard>
  );
};

Board.getInitialProps = async context => {
  const state = context.store.getState();
  context.store.dispatch({
    type: LOAD_BOARDS_REQUEST,
    lastId: 0,
    keyword: state.board.keyword,
  });
};

export default Board;
