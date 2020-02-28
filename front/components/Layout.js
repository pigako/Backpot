import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const Screen = styled.div`
  height: 100%;
`;

const Contents = styled.div`
  height: 100%;
`;

const LeftContent = styled.div`
  width: 23.333336%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  float: left;
  color: white;

  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 2px 5px rgba(0, 0, 0, 0.8);
`;

const RightContent = styled.div`
  width: 75.666663%;
  height: 100%;
  min-width: calc(100% - 410px);
  max-width: calc(100% - 310px);
  float: right;
`;

const Layout = ({ children }) => {
  return (
    <Screen>
      <Header />
      <Contents>
        <LeftContent>
          <LoginForm />
          <UserProfile />
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
