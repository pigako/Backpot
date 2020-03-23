import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useSelector } from 'react-redux';

import { LOAD_USER_REQUEST } from '../reducers/user';
import BookCard from '../components/BookCard';
import Button from '../components/designs/Button';
import BoardTable from '../components/BoardTable';

const LibreryTitle = styled.h1`
  margin: 10px 0px 10px 0px;

  font-weight: bold;
`;

const NovelList = styled.div`
  width: 98%;
  overflow: hidden;
  border: solid 2px #495057;

  & > p {
    font-weight: bold;
    margin: 1rem 0rem 1rem 1rem;
  }
`;

const NovelButtonDiv = styled.div`
  width: 100%;
  margin: 1rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
    margin-right: 1rem;
  }
`;

const MyBoard = styled.div`
  width: 98%;
  overflow: hidden;
  margin-top: 1rem;
  border: solid 2px #495057;
  margin-bottom: 3rem;
  & > p {
    font-weight: bold;
    margin: 1rem 0rem 1rem 1rem;
  }
`;

const BoardButtonDiv = styled.div`
  width: 100%;
  margin: 1rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
    margin-right: 1rem;
  }

  & > button {
    width: 7rem;
  }
`;

const Librery = () => {
  const user = useSelector(state => state.user.otherUserInfo)
    ? useSelector(state => state.user.otherUserInfo)
    : useSelector(state => state.user.me);

  const { id: myId } = useSelector(state => state.user.me) || '';

  const onGoWriteBook = useCallback(e => {
    Router.push('/writebook');
  }, []);

  const onGoWriteBoard = useCallback(e => {
    Router.push('/writeboard');
  }, []);

  return (
    <div>
      <LibreryTitle>{user.nickname} 님의 서재입니다.</LibreryTitle>
      <NovelList>
        <p>연재소설목록</p>
        {user &&
          user.Books.map(book => {
            return (
              <BookCard key={+book.id} book={book} nickname={user.nickname} />
            );
          })}

        <NovelButtonDiv>
          {user && user.Books[0] ? null : (
            <p>연재중인 소설이 존재하지 않습니다.</p>
          )}
          {user && user.id === myId ? (
            <Button onClick={onGoWriteBook}>새 작품</Button>
          ) : null}
        </NovelButtonDiv>
      </NovelList>
      <MyBoard>
        <p>작성한 게시글 목록 * {user && user.Boards.length} 개 *</p>
        {user && user.Boards.length ? <BoardTable board={user.Boards} /> : null}
        <BoardButtonDiv>
          {user && user.Boards.length ? null : (
            <p>작성한 게시글이 존재하지 않습니다.</p>
          )}
          {user && user.id === myId ? (
            <Button onClick={onGoWriteBoard}>새 게시글</Button>
          ) : null}
        </BoardButtonDiv>
      </MyBoard>
    </div>
  );
};

Librery.getInitialProps = async context => {
  const id = context.query.id;

  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: id,
  });
};

export default Librery;
