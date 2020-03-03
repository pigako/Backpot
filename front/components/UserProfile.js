import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Button from './designs/Button';
import LikingBook from './LikingBook';
import { LOG_OUT_REQUEST } from '../reducers/user';

const Profile = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1rem;
`;

const TopProfile = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 2px #495057;
  height: 70px;
`;

const Nickname = styled.div`
  flex: 10;
`;

const MiddleProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px #495057;
  height: 100px;

  & > * {
    flex: 1;
  }
`;

const Preference = styled.div`
  & label {
    text-align: center;
  }
`;

const Label = styled.label`
  display: block;

  & + & {
    margin-top: 10px;
  }
`;

const BottomProfile = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20rem;
  max-height: calc(100vh - 300px);
  /* overflow-y: scroll; */
  overflow: auto;
  & > * {
    margin-top: 10px;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #148cff;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1e96ff;
  }

  ::-webkit-scrollbar-thumb:active {
    background: #0a82ff;
  }
`;

const LikeBookList = styled.ul`
  color: white;
`;
const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;
const UserProfile = () => {
  const { isLoggingOut } = useSelector(state => state.user);
  const {
    LikingBook: likingBookList,
    LikingUser: likingWriter,
    nickname,
  } = useSelector(state => state.user.me);
  // const likingBookList = useSelector(state => state.user.me.LikingBook);
  // const likingWriter = useSelector(state => state.user.me.LikingUser);
  const dispatch = useDispatch();

  const onLogout = useCallback(e => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Profile>
      <TopProfile>
        <Nickname>{nickname} 님</Nickname>
        <Button onClick={onLogout}>
          {isLoggingOut ? (
            <LoadingImg src="/static/icons/loading_blue.gif" />
          ) : (
            `로그아웃`
          )}
        </Button>
      </TopProfile>
      <MiddleProfile>
        <Preference key="LikedBook">
          <Label>선호작품</Label>
          <Label>{likingBookList.length || 0}</Label>
        </Preference>
        <Preference key="LikedWriter">
          <Label>선호작가</Label>
          <Label>{likingWriter.length}</Label>
        </Preference>
      </MiddleProfile>
      <BottomProfile>
        <Label>선호작 목록</Label>
        <LikeBookList>
          {likingBookList ? (
            likingBookList.map((v, i) => {
              return <LikingBook key={i} book={v} />;
            })
          ) : (
            <Label>선호작 목록이 존재하지 않습니다.</Label>
          )}
        </LikeBookList>
        {likingBookList && <Button size={'large'}>더 보기</Button>}
      </BottomProfile>
    </Profile>
  );
};

export default UserProfile;
