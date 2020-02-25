import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header from './Header';

const Contents = styled.div``;

const LeftContent = styled.div``;

const RightContent = styled.div``;

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
