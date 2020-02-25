import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header from './Header';

const Contents = styled.div``;

const LeftContent = styled.div`
  width: 33.333336%;
  float: left;
  margin: 10px 0 10px 5px;
  height: 500px;
`;

const RightContent = styled.div`
  width: 66.666663%;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Contents>
        <LeftContent></LeftContent>
        <RightContent>{children}</RightContent>
      </Contents>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
