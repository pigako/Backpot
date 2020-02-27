import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LikedList = styled.li`
  display: block;
  width: 100%;
  height: 2rem;
  text-align: left;
  border-radius: 4px;
  border-bottom: solid 2px #495057;
  &:nth-child(2n) {
    background: #495057;
  }

  &:hover {
    background: #148cff;
  }

  & + & {
    margin-top: 10px;
  }
`;

const Writer = styled.label`
  display: block;
  width: 35%;
  line-height: 2rem;
  float: left;
  cursor: pointer;
  margin-left: 5px;
`;

const Bookname = styled.label`
  display: block;
  width: calc(65% -5px);
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const LikedBook = ({ likedBook }) => {
  return (
    <LikedList>
      <Link href={`/writer`}>
        <a>
          <Writer>{likedBook.writer}</Writer>
        </a>
      </Link>
      <Link
        href={{ pathname: '/book', query: { id: likedBook.bookname } }}
        as={`/book/${likedBook.bookname}`}
      >
        <a>
          <Bookname>{likedBook.bookname}</Bookname>
        </a>
      </Link>
    </LikedList>
  );
};

LikedBook.propTypes = {
  likedBook: PropTypes.shape({
    writer: PropTypes.string,
    bookname: PropTypes.string,
  }),
};

export default LikedBook;
