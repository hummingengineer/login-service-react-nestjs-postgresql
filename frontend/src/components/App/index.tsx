import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import fetchGraphQL from "../../utils/fetchGraphQL";

export default function App() {
  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      const query = `{
        remove(id: 40)
      }`;
      const res = await fetchGraphQL(query);
      console.log(res);
      event.preventDefault();
    },
    []
  );

  return (
    <Container>
      <LoginForm onSubmit={handleFormSubmit}>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <ButtonContainer>
          <Button>Login</Button>
          <Button>SIGNUP</Button>
        </ButtonContainer>
      </LoginForm>
    </Container>
  );
}

const waves = keyframes`
from {
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -ms-transform: rotate(0);
  -o-transform: rotate(0);
  transform: rotate(0);
}
to {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  overflow: hidden;
  background-color: white;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: -webkit-transform 300ms, box-shadow 300ms;
  -moz-transition: -moz-transform 300ms, box-shadow 300ms;
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &:before {
    left: 40%;
    bottom: -130%;
    background-color: rgba(69, 105, 144, 0.15);
    -webkit-animation: ${waves} 6s infinite linear;
    -moz-animation: ${waves} 6s infinite linear;
    animation: ${waves} 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba(2, 128, 144, 0.2);
    -webkit-animation: ${waves} 7s infinite;
    -moz-animation: ${waves} 7s infinite;
    animation: ${waves} 7s infinite;
  }
`;

const Input = styled.input`
  font-family: "Asap", sans-serif;
  display: block;
  border-radius: 5px;
  font-size: 16px;
  background: white;
  width: 100%;
  border: 0;
  padding: 10px 10px;
  margin: 15px -10px;
`;

const Button = styled.button`
  font-family: "Asap", sans-serif;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  width: 80px;
  border: 0;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -5px;
  border-radius: 5px;
  background-color: #f45b69;
  -webkit-transition: background-color 300ms;
  -moz-transition: background-color 300ms;
  transition: background-color 300ms;

  &:hover {
    background-color: #f24353;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
