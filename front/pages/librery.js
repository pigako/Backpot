import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useSelector } from 'react-redux';

import LOAD_USER_REQUEST from '../reducers/user';
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

  & > p {
    font-weight: bold;
    margin: 1rem 0rem 1rem 1rem;
  }
`;

const Librery = () => {
  const user =
    useSelector(state => state.user.otherUserInfo).length === 0
      ? useSelector(state => state.user.me)
      : useSelector(state => state.user.otherUserInfo);

  console.log('lib', user);
  return (
    <div>
      <LibreryTitle>{user.nickname} 님의 서재입니다.</LibreryTitle>
      <NovelList>
        <p>연재소설목록</p>
        {user.Books.map(book => {
          return (
            <BookCard key={+book.id} book={book} nickname={user.nickname} />
          );
        })}
        <NovelButtonDiv>
          {user.Books[0] ? null : <p>연재중인 소설이 존재하지 않습니다.</p>}
          <Button>새 작품</Button>
        </NovelButtonDiv>
      </NovelList>
      <MyBoard>
        <p>작성한 게시글 목록</p>
        <BoardTable board={user.Boards} />
        {/* {user.Boards.map(board => {
          return <p>{board.id}</p>;
        })} */}
      </MyBoard>
    </div>
  );
};

Librery.getInitialProps = async context => {
  const id = context.query.id;
  if (!id) {
    alert('잘못된 접근입니다.');
    Router.push('/');
  }
  const state = context.store.getState();
  if (id !== (state.user.me && state.user.me.id)) {
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: id,
    });
  }
};

export default Librery;
