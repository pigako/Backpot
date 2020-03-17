import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Button from '../components/designs/Button';

const SProfileDiv = styled.div`
  width: 98%;
  margin-top: 10px;
`;
const ProfileTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;
const InfoCardWrap = styled.div`
  margin-top: 2rem;
  margin-left: 1.5rem;
  border: solid 1px #495057;
  border-radius: 6px;
  width: 70%;
`;
const InfoCardDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 4rem;
`;
const InfoLeftDiv = styled.div`
  flex: 1;
`;
const InfoRightDiv = styled.div`
  flex: 3;
  display: flex;
  & > input {
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    padding-left: 10px;

    border: solid 2px #495057;
    border-radius: 4px;

    transition: 0.55s ease;

    & :hover {
      border: solid 2px #148cff;
    }
    & :focus {
      border: solid 2px #148cff;
    }
  }
`;

const CheckButton = styled(Button)`
  width: 8rem;
  height: 2rem;
  margin-left: 10px;
`;

const ButtonDiv = styled.div`
  margin: 1rem;
  height: 4rem;
`;

const SButton = styled(Button)`
  display: block;
  width: 8rem;
  margin-top: 1rem;

  float: right;
`;

const Profile = ({ id }) => {
  const { me } = useSelector(state => state.user);

  const [inputs, setInputs] = useState({
    userId: '',
    userNickname: '',
    userPassword: '',
    newUserPassword: '',
    newUserPasswordCheck: '',
  });
  const [checkUserId, setCheckUserId] = useState(false);
  const [checkUserNickname, setCheckUserNickname] = useState(false);
  const [checkUserPassword, setCheckUserPassword] = useState(false);
  const [passwordErrorReason, setPasswordErrorReason] = useState('');
  const {
    userId,
    userPassword,
    userNickname,
    newUserPassword,
    newUserPasswordCheck,
  } = inputs;

  const onChangeInputs = useCallback(
    e => {
      if (e.target.name === 'newUserPasswordCheck') {
        if (e.target.value !== newUserPassword) {
          setPasswordErrorReason('비밀번호가 일치하지 않습니다.');
        } else {
          setPasswordErrorReason('');
        }
      }
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
    [inputs],
  );

  useEffect(
    e => {
      if (!(me && me.id)) {
        alert('로그인 하지 않은 사용자는 접근 할 수 없습니다.');
        Router.push('/');
        return;
      }
      if ((me && me.userId) !== id) {
        alert('잘 못된 접근입니다.');
        Router.push('/');
        return;
      }
    },
    [me && me.userId, id],
  );

  const onCheck = useCallback(
    async e => {
      if (e.target.name === 'checkUserId') {
        if (!userId.trim()) {
          alert('수정 사항이 없습니다.');
          return;
        }
        const result = await axios.post(`/user/check`, {
          type: 'userId',
          userId,
        });
        if (result.data) {
          setCheckUserId(true);
          alert('사용 가능한 아이디입니다.');
        } else {
          alert('이미 사용중인 아이디입니다.');
        }
      } else if (e.target.name === 'checkUserNickname') {
        if (!userNickname.trim()) {
          alert('수정 사항이 없습니다.');
        }
        const result = await axios.post(`/user/check`, {
          type: 'userNickname',
          userNickname,
        });
        if (result.data) {
          setCheckUserNickname(true);
          alert('사용 가능한 닉네임입니다.');
        } else {
          alert('이미 사용중인 닉네임입니다.');
        }
      }
    },
    [userId, userNickname],
  );

  const onUpdatePassword = useCallback(
    e => {
      if (!checkUserPassword) {
        setCheckUserPassword(true);
      }
    },
    [checkUserPassword],
  );

  const onUpdateProfile = useCallback(
    e => {
      if (!(userId || userPassword || userNickname)) {
        alert('수정 사항이 없습니다.');
        return;
      }
      if (passwordErrorReason !== '') {
        alert('패스워드가 일치하지 않습니다.');
      }
      if (userId && !checkUserId) {
        alert('아이디 중복확인을 해주세요.');
      }
      if (userNickname && !checkUserNickname) {
        alert('닉네임 중복확인을 해주세요.');
      }
    },
    [
      userId,
      userPassword,
      userNickname,
      passwordErrorReason,
      checkUserId,
      checkUserNickname,
    ],
  );

  return (
    <SProfileDiv>
      <ProfileTitle>{me && me.nickname} 님 프로필 수정</ProfileTitle>
      <InfoCardWrap>
        <InfoCardDiv>
          <InfoLeftDiv>
            <label>아이디</label>
          </InfoLeftDiv>
          <InfoRightDiv>
            <input
              type="text"
              name="userId"
              value={userId}
              placeholder={me && me.userId}
              onChange={onChangeInputs}
            />
            {checkUserId || (
              <CheckButton name="checkUserId" onClick={onCheck}>
                중복확인
              </CheckButton>
            )}
          </InfoRightDiv>
        </InfoCardDiv>
        <InfoCardDiv>
          <InfoLeftDiv>
            <label>비밀번호</label>
          </InfoLeftDiv>
          {checkUserPassword ? (
            <InfoRightDiv>
              <input
                type="password"
                name="userPassword"
                value={userPassword}
                placeholder="Current Password"
                onChange={onChangeInputs}
              />
              <input
                type="password"
                name="newUserPassword"
                value={newUserPassword}
                placeholder="New Password"
                onChange={onChangeInputs}
              />
              <input
                type="password"
                name="newUserPasswordCheck"
                value={newUserPasswordCheck}
                placeholder="Repeat New Password"
                onChange={onChangeInputs}
              />
            </InfoRightDiv>
          ) : (
            <InfoRightDiv>
              <Button size={'middle'} onClick={onUpdatePassword}>
                비밀번호 변경
              </Button>
            </InfoRightDiv>
          )}
        </InfoCardDiv>
        <InfoCardDiv>
          <InfoLeftDiv>
            <label>닉네임</label>
          </InfoLeftDiv>
          <InfoRightDiv>
            <input
              type="text"
              name="userNickname"
              value={userNickname}
              placeholder={me && me.nickname}
              onChange={onChangeInputs}
            />
            {checkUserNickname || (
              <CheckButton name="checkUserNickname" onClick={onCheck}>
                중복확인
              </CheckButton>
            )}
          </InfoRightDiv>
        </InfoCardDiv>
        <ButtonDiv>
          <SButton onClick={onUpdateProfile}>수정하기</SButton>
        </ButtonDiv>
      </InfoCardWrap>
    </SProfileDiv>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
};

Profile.getInitialProps = async context => {
  const id = context.query.id;
  return { id };
};

export default Profile;
