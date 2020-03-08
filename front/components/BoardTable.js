import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import Router from 'next/router';

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
    cursor: pointer;
  }
  & th:nth-child(1) {
    width: 10%;
    text-align: center;
  }
  & td:nth-child(1) {
    text-align: center;
  }
  & th:nth-child(3),
  th:nth-child(4) {
    width: 12%;
  }
  & td:nth-child(3),
  td:nth-child(4) {
    text-align: center;
  }

  & tr:hover {
    background: #495057;
    color: white;
  }
`;

const BoardTable = ({ board }) => {
  const goBoard = useCallback(
    boardId => e => {
      Router.push(
        { pathname: '/detailboard', query: { id: boardId } },
        `/detailboard/${boardId}`,
      );
    },
    [],
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>번호 </th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
        </tr>
      </thead>
      <tbody>
        {board.map(v => {
          return (
            <tr key={+v.id} onClick={goBoard(+v.id)}>
              <td>{v.id}</td>
              <td>
                <Link
                  href={{ pathname: '/detailboard', query: { id: v.id } }}
                  as={`/detailboard/${v.id}`}
                >
                  <a>{v.title}</a>
                </Link>
              </td>
              <td>{v.User.nickname}</td>
              <td>{moment(v.createdAt).format('YYYY.MM.DD')}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

BoardTable.propTypes = {
  board: PropTypes.array.isRequired,
};

export default BoardTable;
