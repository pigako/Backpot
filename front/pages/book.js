import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Helmet from 'react-helmet';

import {
  LOAD_BOOK_REQUEST,
  ADD_LIKEBOOK_REQUEST,
  REMOVE_LIKEBOOK_REQUEST,
  DELETE_BOOK_REQUEST,
} from '../reducers/book';
import BookTable from '../components/BookTable';
import Button from '../components/designs/Button';
import { frontUrl } from '../config/config';

const SBookDiv = styled.div`
  width: 98%;
  margin: 30px 0px 0px 10px;
`;

const BookTopDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 16rem;

  border-bottom: solid 2px #495057;
`;
const BookTopLeftDiv = styled.div`
  width: 15%;
  float: left;
`;
const BookTopRightDiv = styled.div`
  width: 80%;
  padding: 1.5rem;
  float: right;

  border: solid 2px #495057;

  position: relative;

  & > label {
    font-size: 1rem;
    display: block;
    margin-top: 1rem;
  }

  & > div {
    display: flex;

    & > label {
      font-size: 1rem;
      display: block;
      margin-top: 1rem;
      flex: 1;
      & > a {
        cursor: pointer;
      }
    }
  }
`;
const WriterButtonDiv = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  right: 1%;
`;

const UpdateButton = styled(Button)``;
const DeleteButton = styled(Button)``;
const Thumbnail = styled.img`
  height: 13rem;
  display: block;
  margin: 1rem auto;
`;
const BookTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BookSummaryDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 7rem;
  width: 100%;
  border-bottom: solid 2px #495057;
`;

const BookButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.25rem;

  & > button {
    width: 8rem;
  }
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const Book = () => {
  const { book, isDeletingBook, isDeletedBook } = useSelector(
    (state) => state.book,
  );
  const { me } = useSelector((state) => state.user);
  const [isASC, setIsASC] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const onGoWriter = useCallback(() => {
    router.push(
      { pathname: '/librery', query: { id: book.User.userId } },
      `/librery/${book.User.userId}`,
    );
  }, [book && book.User.id]);

  const onGoUpdateBook = useCallback(() => {
    router.push(
      { pathname: '/updatebook', query: { bookid: book.id } },
      `/updatebook/${book.id}`,
    );
  }, [book && book.id]);

  const onGoWriteEpisode = useCallback(() => {
    router.push(
      { pathname: '/episode/write', query: { bookid: book.id } },
      `/episode/write/${book.id}`,
    );
  });

  const onGoDeleteBook = useCallback(() => {
    dispatch({
      type: DELETE_BOOK_REQUEST,
      id: book && book.id,
    });
  }, [book && book.id]);

  useEffect(() => {
    if (isDeletedBook) {
      dispatch({
        type: CHANGE_DELETEDBOOK,
      });
      router.push('/booklist');
    }
  }, [isDeletedBook]);

  const onAddLikeBook = useCallback(
    (e) => {
      dispatch({
        type: ADD_LIKEBOOK_REQUEST,
        bookId: book.id,
        data: {
          name: book.name,
          userId: book.User.userId,
          userNickname: book.User.nickname,
          recentDay: book.recentDay,
        },
      });
    },
    [
      book && book.id,
      book && book.name,
      book && book.User.userId,
      book && book.User.nickname,
      book && book.recentDay,
    ],
  );
  const onRemoveLikeBook = useCallback(
    (e) => {
      dispatch({
        type: REMOVE_LIKEBOOK_REQUEST,
        bookId: book.id,
      });
    },
    [book && book.id],
  );
  const onIsASC = useCallback(
    (e) => {
      setIsASC(!isASC);
    },
    [isASC],
  );

  return (
    <SBookDiv>
      <Helmet
        title={book && book.name}
        description={book && book.summary}
        meta={[
          {
            name: 'description',
            content: book && book.summary,
          },
          {
            property: 'og:title',
            content: `${book && book.name}`,
          },
          {
            property: 'og:description',
            content: `${book && book.summary}`,
          },
          {
            property: 'og:image',
            content:
              book && book.thumbnail
                ? `${book && book.thumbnail}`
                : `${frontUrl}/favicon`,
          },
          {
            property: 'og:url',
            content: `${frontUrl}/book/${book && book.id}`,
          },
        ]}
      />
      <BookTopDiv>
        <BookTopLeftDiv>
          <Thumbnail src={`${book && book.thumbnail}`} />
        </BookTopLeftDiv>
        <BookTopRightDiv>
          <BookTitle>{book && book.name}</BookTitle>
          {(me && me.id) === (book && book.User.id) ? (
            <WriterButtonDiv>
              <UpdateButton onClick={onGoUpdateBook}>수정</UpdateButton>
              <DeleteButton color="pink" onClick={onGoDeleteBook}>
                {isDeletingBook ? (
                  <LoadingImg src="/static/icons/loading_pink.gif" />
                ) : (
                  `삭제`
                )}
              </DeleteButton>
            </WriterButtonDiv>
          ) : null}

          <label>{book && book.BookGenre.map((v) => v.name + ' ')}</label>
          <div>
            <label>
              작가 <a onClick={onGoWriter}>{book && book.User.nickname}</a> 님
            </label>
            <label>
              연재주기 {book && book.serialDay.split(',').map((v) => v + ' ')}
            </label>
          </div>
          <div>
            <label>
              작품등록일{' '}
              {book && moment(book.createdAt).format('YY.MM.DD HH시 mm분')}
            </label>
            <label>
              최근등록일{' '}
              {book &&
                (book.Episodes[book.Episodes.length - 1]
                  ? moment(
                      book.Episodes[book.Episodes.length - 1].createdAt,
                    ).format('YY.MM.DD HH시 mm분')
                  : moment(book.createdAt).format('YY.MM.DD HH시 mm분'))}
            </label>
          </div>
          <div>
            <label>연재수 {book && book.Episodes.length} 화</label>
            <label>
              조회수{' '}
              {book && book.Episodes.reduce((acc, val) => acc + val.views, 0)}
            </label>
          </div>
          <div>
            <label>
              추천수{' '}
              {book &&
                book.Episodes.reduce((acc, val) => acc + val.recommends, 0)}
            </label>
            <label>선호작수 {book && book.likersCount}</label>
          </div>
        </BookTopRightDiv>
      </BookTopDiv>
      <BookSummaryDiv
        dangerouslySetInnerHTML={{ __html: book && book.summary }}
      />
      <BookButtonDiv>
        {(me && me.id) === (book && book.User.id) ? (
          <Button onClick={onGoWriteEpisode}>글쓰러가기</Button>
        ) : null}
        {me ? (
          me.LikingBook.find((v) => v.id === (book && book.id)) ? (
            <Button color="pink" onClick={onRemoveLikeBook}>
              선호작해제
            </Button>
          ) : (
            <Button onClick={onAddLikeBook}>선호작추가</Button>
          )
        ) : null}
        <Button onClick={onIsASC}>
          {isASC ? `오름차순정렬` : `내림차순정렬`}
        </Button>
      </BookButtonDiv>
      {book && <BookTable episode={book.Episodes} isASC={isASC} />}
    </SBookDiv>
  );
};

Book.getInitialProps = async (context) => {
  const bookId = context.query.bookid;

  context.store.dispatch({
    type: LOAD_BOOK_REQUEST,
    id: bookId,
  });
};

export default Book;
