import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UsernameImg from "../images/username.png";
import PasswordImg from "../images/password.png";
import { useNavigate } from "react-router-dom";
import firebaseConfigs from "../config/firebase";
import { doc, getDoc } from "firebase/firestore/lite";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #001f3f;
`;

const ColumnLeft = styled.div`
  background-size: cover;

  background-image: url("https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?k=20&m=1271522601&s=612x612&w=0&h=y3NLBCVMWO8wHGwjEcXIuGOSL_0K6iFTvySCM-X5TxM=");
  height: 100vh;
`;

const ColumnRight = styled.div`
  margin-top: 20%;
`;

const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: white;
  /* padding-left:100px; */
`;

const WelcomeHeading = styled.h1`
  color: white;
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  line-height: 44px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BoxContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  height: 40px;
  width: 80%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`;
const UsernameImage = styled.img`
  margin-top: -3px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;

const UserInput = styled.input`
  border: 1px solid #bb0000;
  background-color: transparent;
  border-left-color: transparent;
  margin-left: -13px;
  border-radius: 10px;
  color: white;
  width: 100%;
  padding-left: 20px;
`;

const UserInput2 = styled.input`
  border: 1px solid #bb0000;
  background-color: transparent;
  border-right-color: transparent;
  margin-right: -13px;
  border-radius: 10px;
  color: white;
  width: 100%;
  padding-left: 20px;
`;

const Button = styled.button`
  border-radius: 7px;
  background-color: #bb0000;
  border: 0;
  font-weight: 600;
  color: white;
  padding: 9px 15px;
  width: 70%;
  margin-bottom: 30px;
`;

const ParagraphContainer = styled.div`
  display: flex;
`;
const Paragraph = styled.p`
  color: white;
  margin: 10px;
`;
function Login() {
  const db = firebaseConfigs.db;
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigateToLogin = async () => {
    const docRef = doc(db, "members", user.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.data() != undefined) {
      if (
        docSnap.data().id == user.id &&
        docSnap.data().password == user.password
      ) {
        navigate("/survey", { state: user.id });
      } else {
        alert("Wrong id/password");
      }
    } else {
      alert("Wrong id/password");
    }
  };
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <Row noGutter>
        <Col md={6} className="d-none d-lg-block">
          <ColumnLeft></ColumnLeft>
        </Col>
        <Col xs={12} md={6}>
          <ColumnRight>
            <FormWrapper>
              <WelcomeHeading>Welcome To Film Selector!</WelcomeHeading>
              <BoxContainer>
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
                    name="password"
                    value={user.password}
                    onChange={onChangeInput}
                    placeholder="Password"
                  />
                  <UsernameImage src={PasswordImg}></UsernameImage>
                </InputContainer>

                <Button onClick={navigateToLogin}>Login</Button>
                <Button onClick={navigateToSignUp}>Sign Up</Button>
                <ParagraphContainer>
                  <Paragraph>Forgot username?</Paragraph>
                  <Paragraph>Forgot password?</Paragraph>
                </ParagraphContainer>
              </BoxContainer>
            </FormWrapper>
          </ColumnRight>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Login;
