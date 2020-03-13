import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const BookListTitle = styled.h1`
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

const BookList = () => {
  return (
    <div>
      <BookListTitle>연재소설 목록</BookListTitle>
      <NovelList>
        <p>인기 연재 목록</p>
      </NovelList>
    </div>
  );
};

export default BookList;
