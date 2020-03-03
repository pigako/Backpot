import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const Card = styled.div`
  width: 31%;
  margin: 1%;
  height: 15rem;

  border: solid 1px #495057;
  float: left;

  @media (max-width: 1620px) {
    width: 47%;
  }
`;

const Thumbnail = styled.img`
  width: 32%;
  height: 13rem;
  float: left;

  margin-top: 1rem;
  margin-left: 4%;
`;

const CardContent = styled.div`
  width: 56%;
  height: 9rem;
  float: right;
  margin-top: 3rem;
  margin-right: 4%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.label`
  display: block;
  font-weight: bold;
`;

const Genre = styled.label`
  display: block;
`;

const Writer = styled.label`
  display: block;
`;

const CreatedDate = styled.label`
  display: block;
`;

const BookCard = ({ book, nickname }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Thumbnail src={book.thumbnail}></Thumbnail>
      <CardContent>
        <Title>{book.name}</Title>
        <Genre>{book.BookGenre[0].name}</Genre>
        <Writer>{nickname}</Writer>
        <CreatedDate>
          등록일 {moment(book.createdAt).format('YYYY.MM.DD')}
        </CreatedDate>
      </CardContent>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default BookCard;
