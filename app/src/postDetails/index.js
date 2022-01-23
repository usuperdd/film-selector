import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import FooterImg from "../images/footer.jpeg";
import ProfileImg from "../images/profile.png";

const Wrapper = styled.div`
  height: 100%;
  background-color: #001f3f;
  
`;

const Header = styled.div`
  height: 70px;
  width: 100%;
  background-image: url(${FooterImg});
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 50px;

`;

const UsernameImage = styled.img`
width: 50px;
height: 50px;
margin-left:  auto;
`;


const Body = styled.div`
margin-top:60px;
width: 60%;
display: flex;
flex-direction: column;
/* border:solid white; */
color: white;
margin-right:auto;
margin-left: auto;
/* height: 100vh; */
`;

const MainContainer = styled.div`
border-top: 10px solid #C167FF;
border-left: 1px solid #C167FF;
border-right: 1px solid #C167FF;
border-bottom: 1px solid #C167FF;
padding: 10px;
color:white;
margin-bottom: 20px;
height: 600px;
`;

const Heading = styled.div`

margin-right: 15px;

`;
const Heading2 = styled.div`
margin-right: 15px;
border-bottom: 1px solid #C167FF;
`;


function PostDetails() {
    
  
    return (
      <Wrapper>
        <Header>
          <UsernameImage src={ProfileImg} />
        </Header>

        <Body>
        <MainContainer>
            <Heading>Title</Heading>
            <Heading>Writer | Date</Heading>
            <Heading2>Views | Recommendation | Comments</Heading2>
        </MainContainer>
            </Body>
      </Wrapper>
    );
  }
  
  export default PostDetails;
  