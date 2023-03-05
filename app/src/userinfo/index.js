import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UsernameImg from "../images/username.png";
import EmailImg from "../images/email.jpeg";
import PasswordImg from "../images/password.png";
import { useNavigate } from "react-router-dom";
import firebaseConfigs from "../config/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #001f3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 80%;
  max-width: 500px;
  height: 75%;
  background-color: #7c4dff;
  border-radius: 20px;
`;

const Heading = styled.h1`
  color: white;
  font-weight: 700;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  height: 40px;
  width: 80%;
  max-width: 400px;
  display: flex;
  margin-bottom: 35px;
`;
const UsernameImage = styled.img`
  margin-top: -3px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;

const UsernameImage2 = styled.img`
  margin-top: -3px;
  width: 55px;
  height: 55px;
  z-index: 1;
  border-radius: 50px;
`;

const UserInput = styled.input`
  border: 3px solid #aa00ff;
  background-color: transparent;
  border-left-color: transparent;
  margin-left: -13px;
  border-radius: 10px;
  width: 100%;
  color: white;
  padding-left: 20px;

  ::placeholder {
    color: yellow;
  }
`;

const UserInput2 = styled.input`
  border: 3px solid #aa00ff;
  background-color: transparent;
  border-right-color: transparent;
  margin-right: -13px;
  border-radius: 10px;
  width: 100%;
  color: white;
  padding-left: 20px;
  ::placeholder {
    color: yellow;
  }
`;

const AgreementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
const Agreement = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  border-radius: 7px;
  background-color: white;
  border: 0;
  font-weight: 600;
  color: #7c4dff;
  padding: 9px 15px;
  width: 80%;
  max-width: 360px;
  margin-top: 20px;
  /* margin-bottom: 30px; */
`;

const ParagraphContainer = styled.div`
  display: flex;
`;
const Paragraph = styled.p`
  color: white;
  margin: 10px;
`;

function UserInfo() {
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/");
    const Yourwatchlist = () => {
      navigate("/survey");
    };
  }
  return (
    <Wrapper>
      <Container>
        <Heading>User InFo</Heading>
        <InputContainer>
          <UsernameImage src={UsernameImg}></UsernameImage>
          <UserInput placeholder="Username" />
        </InputContainer>

        <InputContainer>
          <UserInput2 placeholder="Email" />
          <UsernameImage2 src={EmailImg}></UsernameImage2>
        </InputContainer>

        <InputContainer>
          <UsernameImage src={PasswordImg}></UsernameImage>
          <UserInput placeholder="Password" />
        </InputContainer>
       

        <Button>Edit</Button>
        <ParagraphContainer>
          
        </ParagraphContainer>
        <Button>Your WatchList</Button>
      </Container>
    </Wrapper>
  );
}

export default UserInfo;
