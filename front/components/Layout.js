import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

const Screen = styled.div`
  height: 100%;
`;

const Contents = styled.div`
  /* height: calc(100% - 100px); */
  margin-top: 50px;
`;

const LeftContent = styled.div`
  position: fixed;
  width: 23.333336%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  float: left;
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
`;

const RightContent = styled.div`
  width: 75.666663%;
  overflow: auto;
  min-width: calc(100% - 410px);
  max-width: calc(100% - 310px);
  float: right;
  margin-top: 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const { me } = useSelector(state => state.user);
  return (
    <Screen>
      <Header />
      <Contents>
        <LeftContent>
          {me && me.userId ? <UserProfile /> : <LoginForm />}
        </LeftContent>
        <RightContent>{children}</RightContent>
      </Contents>
    </Screen>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
