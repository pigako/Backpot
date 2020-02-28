import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Router from 'next/router';
import Button from '../components/designs/Button';
import { SIGN_UP_REQUEST } from '../reducers/user';

const SignUpDesign = styled.div`
  height: 100%;
`;

const Subject = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
`;

const SignUpForm = styled.form`
  margin-top: 20px;
  height: 100%;
  width: 90%;
`;

const SDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  & > label {
    flex: 10;
    margin-bottom: 0px;
  }

  & > button {
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  outline: none;
  border: solid 1px #339af0;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 10px;

  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
`;

const ErrorLabel = styled.label`
  display: inline-block;
  color: red;
`;

const LoginFormButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  & button {
    margin-left: 10px;
  }
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const SignUp = () => {
  const { isSignedUp, isSigningUp } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [errorReason, setErrorReason] = useState({
    userIdCheck: false,
    passwordError: '',
    passwordCheckError: '',
    nicknameCheck: false,
  });

  const {
    userIdCheck,
    passwordError,
    passwordCheckError,
    nicknameCheck,
  } = errorReason;

  const onChangeUserId = useCallback(e => {
    setUserId(e.target.value);
  }, []);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback(
    e => {
      if (e.target.value !== password) {
        setErrorReason({
          ...errorReason,
          passwordCheckError: '비밀번호가 일치하지 않습니다.',
        });
      } else {
        setErrorReason({
          ...errorReason,
          passwordCheckError: '',
        });
      }
      setPasswordCheck(e.target.value);
    },
    [password, errorReason, passwordCheckError],
  );

  const onCheckUserId = useCallback(
    async e => {
      if (userId.trim() === '') {
        return alert('아이디를 입력해주세요');
      }
      const result = await axios.post(`/user/check`, {
        type: 'userId',
        userId,
      });
      if (result.data) {
        setErrorReason({
          ...errorReason,
          userIdCheck: true,
        });
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('이미 사용중인 아이디입니다.');
      }
    },
    [errorReason, userId],
  );

  const onCheckNickname = useCallback(
    async e => {
      if (nickname.trim() === '') {
        return alert('닉네임을 입력해주세요');
      }
      const result = await axios.post(`/user/check`, {
        type: 'nickname',
        nickname,
      });
      if (result.data) {
        setErrorReason({
          ...errorReason,
          nicknameCheck: true,
        });
        alert('사용 가능한 닉네임입니다.');
      } else {
        alert('이미 사용중인 닉네임입니다.');
      }
    },
    [errorReason, nickname],
  );

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!userIdCheck) {
        return alert('아이디 중복확인을 해주세요.!');
      }
      if (!nicknameCheck) {
        return alert('닉네임 중복확인을 해주세요.!');
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          userId,
          password,
          nickname,
        },
      });
    },
    [userIdCheck, nicknameCheck, userId, password, nickname],
  );

  useEffect(() => {
    if (isSignedUp) {
      alert('회원가입 완료');
      Router.push('/');
    }
  }, [isSignedUp]);

  return (
    <SignUpDesign>
      <Subject>회원가입</Subject>
      <SignUpForm onSubmit={onSubmitForm}>
        <div>
          <SDiv>
            <Label htmlFor="user-id">아이디</Label>
            {userIdCheck || (
              <Button type="button" onClick={onCheckUserId}>
                중복확인
              </Button>
            )}
          </SDiv>
          <Input
            htmlFor="user-id"
            name="userId"
            value={userId}
            onChange={onChangeUserId}
            required
          />
        </div>
        <div>
          <Label htmlFor="user-password">비밀번호</Label>
          <br />
          <Input
            htmlFor="user-password"
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <Label htmlFor="user-password-Check">비밀번호체크</Label>
          <br />
          <Input
            htmlFor="user-password-Check"
            name="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
        </div>
        <div>
          <SDiv>
            <Label htmlFor="user-nickname">닉네임</Label>
            {nicknameCheck || (
              <Button type="button" onClick={onCheckNickname}>
                중복확인
              </Button>
            )}
          </SDiv>
          <Input
            htmlFor="user-nickname"
            name="nickname"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <LoginFormButtonDiv>
          <Button type="submit" color="pink">
            {isSigningUp ? (
              <LoadingImg src="/static/icons/loading_pink.gif" />
            ) : (
              `가입하기`
            )}
          </Button>
        </LoginFormButtonDiv>
        <ErrorLabel>{passwordCheckError}</ErrorLabel>
      </SignUpForm>
    </SignUpDesign>
  );
};

export default SignUp;
