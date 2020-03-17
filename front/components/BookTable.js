import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Router from 'next/router';
import moment from 'moment';

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 1px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem auto;
  width: 98%;

  & th {
    padding: 1rem;
    background: #148cff;
    color: white;
  }
  & td {
    padding: 1rem;
    border-bottom: 1px solid #7053c4;
  }

  & td:nth-child(1),
  td:nth-child(4),
  td:nth-child(5) {
    width: 10%;
    text-align: center;
  }
  & td:nth-child(3) {
    width: 12%;
    text-align: center;
  }
  & td:nth-child(2) {
    text-align: left;
  }

  & tr:hover {
    background: #495057;
    color: white;
    cursor: pointer;
  }
`;

const BookTable = ({ episode, isASC = true }) => {
  const goEpisode = useCallback(
    episodeId => e => {
      Router.push(
        {
          pathname: '/episode',
          query: { id: episodeId },
        },
        `/episode/${episodeId}`,
      );
    },
    [],
  );

  const reverseEpisode = episode.slice().reverse();

  // 번호 제목 날짜 조회 추천
  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>날짜</th>
          <th>조회</th>
          <th>추천</th>
        </tr>
      </thead>
      <tbody>
        {episode.length ? (
          isASC ? (
            episode.map((v, index) => {
              return (
                <tr key={+v.id} onClick={goEpisode(+v.id)}>
                  <td>{index + 1}</td>
                  <td>{v.title}</td>
                  <td>{moment(v.createdAt).format('YYYY.MM.DD')}</td>
                  <td>{v.views}</td>
                  <td>{v.recommends}</td>
                </tr>
              );
            })
          ) : (
            reverseEpisode.map((v, index) => {
              return (
                <tr key={+v.id} onClick={goEpisode(+v.id)}>
                  <td>{reverseEpisode.length - index}</td>
                  <td>{v.title}</td>
                  <td>{moment(v.createdAt).format('YYYY.MM.DD')}</td>
                  <td>{v.views}</td>
                  <td>{v.recommends}</td>
                </tr>
              );
            })
          )
        ) : (
          <tr>
            <td colSpan={5}>
              <a>게시글이 존재하지 않습니다.</a>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

BookTable.propTypes = {
  episode: PropTypes.array.isRequired,
  isASC: PropTypes.bool.isRequired,
};

export default BookTable;
