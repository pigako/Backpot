import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Button from './designs/Button';

const Form = styled.form`
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1rem;
`;
const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;
const Input = styled.input`
  /* outline: #339af0;
  border: #339af0; */
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 10px;

  width: 90%;
  font-size: 1.2rem;
`;
const LoginFormButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  & button {
    margin-left: 10px;
  }
`;

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
  });
  const { userId, password } = inputs;

  const onChangeInputs = useCallback(
    e => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
    [inputs],
  );

  const onSubmitForm = useCallback(e => {
    e.preventDefault();
  });
  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <Label htmlFor="user-id">아이디</Label>
        <br />
        <Input
          htmlFor="user-id"
          name="userId"
          value={userId}
          onChange={onChangeInputs}
          required
        />
      </div>
      <div>
        <Label htmlFor="user-password">비밀번호</Label>
        <br />
        <Input
          htmlFor="user-password"
          name="password"
          value={password}
          onChange={onChangeInputs}
          required
        />
      </div>
      <LoginFormButtonDiv>
        <Button type="submit">로그인</Button>
        <Link href="signup">
          <a>
            <Button color="pink">회원가입</Button>
          </a>
        </Link>
      </LoginFormButtonDiv>
    </Form>
  );
};

export default LoginForm;
