import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SHome = styled.div`
  height: 100%;
  width: 99%;
`;

const TopBanner = styled.div`
  width: 100%;
  height: 30%;

  & div {
    border: solid 2px black;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
const LeftTopBanner = styled.div`
  width: 70%;
  height: 100%;
  margin-right: 1%;
  float: left;
`;
const LeftTopBannerDiv1 = styled.div`
  width: 100%;
  height: 49%;
  margin-bottom: calc(1% - 2px);
`;
const LeftTopBannerDiv2 = styled.div`
  width: 49.5%;
  height: 49.5%;
  margin-right: 1%;
  float: left;
`;
const LeftTopBannerDiv3 = styled.div`
  display: inline-block;
  width: 49.5%;
  height: 49.5%;
`;
const RightTopBanner = styled.div`
  display: inline-block;
  width: 29%;
  height: 100%;
`;

const Home = () => {
  return (
    <SHome>
      <TopBanner>
        <LeftTopBanner>
          <LeftTopBannerDiv1></LeftTopBannerDiv1>
          <LeftTopBannerDiv2></LeftTopBannerDiv2>
          <LeftTopBannerDiv3></LeftTopBannerDiv3>
        </LeftTopBanner>
        <RightTopBanner></RightTopBanner>
      </TopBanner>
    </SHome>
  );
};

// Home.getInitialProps = async context => {
//   return true;
// };

export default Home;
