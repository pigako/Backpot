import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import BookCard from '../components/BookCard';
import { LOAD_BOOKS_REQUEST } from '../reducers/book';

const BookListTitle = styled.h1`
  margin: 10px 0px 10px 0px;
  font-weight: bold;
`;

const NovelList = styled.div`
  width: 98%;
  overflow: hidden;
`;

const BookList = () => {
  const { books } = useSelector(state => state.book);
  return (
    <div>
      <BookListTitle>연재소설 목록</BookListTitle>
      <NovelList>
        {books &&
          books.map(book => {
            return (
              <BookCard
                key={+book.id}
                book={book}
                nickname={book.User.nickname}
              />
            );
          })}
      </NovelList>
    </div>
  );
};

BookList.getInitialProps = async context => {
  context.store.dispatch({
    type: LOAD_BOOKS_REQUEST,
  });
};

export default BookList;
