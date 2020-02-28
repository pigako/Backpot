import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Button from './designs/Button';
import LikedBook from './LikedBook';

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

  & > * {
    margin-top: 10px;
  }
`;

const LikeBookList = styled.ul`
  color: white;
`;

const UserProfile = () => {
  const { likedBookList } = useSelector(state => state.book);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch();
  }, []);

  return (
    <Profile>
      <TopProfile>
        <Nickname>돼지돼지</Nickname>
        <Button onClick={onLogout}>로그아웃</Button>
      </TopProfile>
      <MiddleProfile>
        <Preference>
          <Label>선호작품</Label>
          <Label>{likedBookList.length}</Label>
        </Preference>
        <Preference>
          <Label>선호작가</Label>
          <Label>20</Label>
        </Preference>
      </MiddleProfile>
      <BottomProfile>
        <Label>선호작 목록</Label>
        <LikeBookList>
          {likedBookList ? (
            likedBookList.map((v, i) => {
              return <LikedBook key={i} likedBook={v} />;
            })
          ) : (
            <Label>선호작 목록이 존재하지 않습니다.</Label>
          )}
        </LikeBookList>
        {likedBookList && <Button size={'large'}>더 보기</Button>}
      </BottomProfile>
    </Profile>
  );
};

export default UserProfile;
