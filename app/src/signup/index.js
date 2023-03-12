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
import { user } from "firebase/firestore/lite";

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

const Button2 = styled.button`
  border-radius: 7px;
  background-color: white;
  border: 0;
  font-weight: 600;
  color: #7c4dff;
  padding: 8px 8px;
  width: 40%;
  max-width: 360px;
  height: 50px;
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

const Paragraph2 = styled.div`
  margin-top: 20px;
  color: white;
`;

function SignUp() {
  const db = firebaseConfigs.db;
  const navigate = useNavigate();

  const [user, setUser] = useState({ id: "", email: "", password: "" });
  function onChangeInput(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  }
  function navigateToLogin() {
    navigate("/");
  }

  const createAccount = async () => {
    if(user.id != "" && user.email != "" && user.password != ""){
    await setDoc(doc(db, "members", user.id), {
      id: user.id,
      email: user.email,
      password: user.password,
    });
    navigate("/survey");
  }
  };
  const Login = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Sign Up</Heading>
        <InputContainer>
          <UsernameImage src={UsernameImg}></UsernameImage>
          <UserInput
            name="id"
            value={user.id}
            onChange={onChangeInput}
            placeholder="Username"
          />
        </InputContainer>

        <InputContainer>
          <UserInput2
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={onChangeInput}
          />
          <UsernameImage2 src={EmailImg}></UsernameImage2>
        </InputContainer>

        <InputContainer>
          <UsernameImage src={PasswordImg}></UsernameImage>
          <UserInput
            name="password"
            value={user.password}
            onChange={onChangeInput}
            placeholder="Password"
          />
        </InputContainer>
        <AgreementContainer>
          <Agreement type={"checkbox"} />
          <Paragraph> I read and agree to Terms & Conditions </Paragraph>
        </AgreementContainer>

        <Button onClick={createAccount}>Create Account</Button>
        <ParagraphContainer>
          <Paragraph2>Already have an account?</Paragraph2>

          <Button2 onClick={Login}>Login</Button2>
        </ParagraphContainer>
      </Container>
    </Wrapper>
  );
}

export default SignUp;
