import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Button from './designs/Button';
import { useSelector } from 'react-redux';

const Menu = styled.header`
  position: flexd;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: solid 2px #495057;
  padding: 0px 10px;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
`;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

const Item = styled.li`
  width: 10rem;
  height: 3.2rem;
  text-align: center;
  margin-right: 10px;
  & a {
    color: white;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;

  width: calc(100% - 210px);

  & a {
    color: white;
    height: 50px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  margin-right: 10px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 10px;

  height: 2.25rem;
  width: 10rem;
  font-size: 1.5rem;

  transition: 0.55s ease;

  & :hover {
    width: 30rem;
  }
  & :focus {
    width: 30rem;
  }
`;

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const { userId } = useSelector(state => state.user.me);
  const onChangeSearchText = useCallback(e => {
    setSearchText(e.target.value);
  }, []);

  const onSubmitSearch = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <Menu>
      <List>
        <Item key="home">
          <Link href="/">
            <a>Backpot</a>
          </Link>
        </Item>
        <Item key="booklist">
          <Link href="booklist">
            <a>웹소설</a>
          </Link>
        </Item>
        <Item key="mydirectory">
          <Link
            href={{ pathname: '/mylibrery', query: { id: userId } }}
            as={`/mylibrery/${userId}`}
          >
            <a>내 서재</a>
          </Link>
        </Item>
        <Item key="profile">
          <Link href="/profile">
            <a>내 정보</a>
          </Link>
        </Item>
        <Item key="board">
          <Link href="/board">
            <a>추천게시판</a>
          </Link>
        </Item>
        <SearchForm onSubmit={onSubmitSearch}>
          <a>Search</a>
          <SearchInput
            value={searchText}
            onChange={onChangeSearchText}
          ></SearchInput>
          <Button type="submit">검색</Button>
        </SearchForm>
      </List>
    </Menu>
  );
};

export default Header;
