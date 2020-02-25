import React from 'react';
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
  width: 50px;
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

const Header = () => {
  return (
    <Menu>
      <List>
        <Item key="home">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </Item>
        <Item key="mydirectory">
          <Link href="/mydirectory">
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
      </List>
    </Menu>
  );
};

export default Header;
