import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Menu = styled.header`
  position: flexd;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 70px;
  height: 50px;
  text-align: center;
  & > a {
    color: white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

const SearchInput = styled.input`
  margin-right: 10px;
`;

const SearchButton = styled.button``;

const Header = () => {
  const [searchText, setSearchText] = useState('');

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
        <Item key="mydirectory">
          <Link href="/mylibrery">
            <a>내 서재</a>
          </Link>
        </Item>
        <Item key="profile">
          <Link href="/profile">
            <a>내 정보</a>
          </Link>
        </Item>
        <Item>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </Item>
        <SearchForm onSubmit={onSubmitSearch}>
          <SearchInput
            value={searchText}
            onChange={onChangeSearchText}
          ></SearchInput>
          <SearchButton type="submit">검색</SearchButton>
        </SearchForm>
      </List>
    </Menu>
  );
};

export default Header;
