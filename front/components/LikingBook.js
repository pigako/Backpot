import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import moment from 'moment';

const LikingList = styled.li`
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
  width: calc(50% -5px);
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  & > p {
    color: red;
    display: contents;
  }
`;

const LikedBook = ({ book }) => {
  return (
    <LikingList>
      <Link
        href={{ pathname: 'librery', query: { id: book.User.userId } }}
        as={`/librery/${book.User.userId}`}
      >
        <a>
          <Writer>{book.User.nickname}</Writer>
        </a>
      </Link>

      <Link
        href={{ pathname: '/book', query: { bookid: book.id } }}
        as={`/book/${book.id}`}
      >
        <a>
          <Bookname>
            {moment
              .duration(
                moment(book.recentDay, 'YYYY-MM-DD HH:mm').diff(
                  moment().format('YYYY-MM-DD HH:mm'),
                ),
              )
              .asHours() > -24 ? (
              <p>New</p>
            ) : null}
            {book.name}
          </Bookname>
        </a>
      </Link>
    </LikingList>
  );
};

LikedBook.propTypes = {
  book: PropTypes.object,
};

// {moment
//   .duration(
//     moment('2020-03-17T02:26:58.000Z', 'YYYY-MM-DD HH:mm').diff(
//       moment().format('YYYY-MM-DD HH:mm'),
//     ),
//   )
//   .asHours()}

export default LikedBook;
