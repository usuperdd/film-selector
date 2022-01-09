import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import FooterImg from "../images/footer.jpeg";
import ProfileImg from "../images/profile.png";

const Wrapper = styled.div`
  height: 100vh;
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


function PostDetails() {
    
  
    return (
      <Wrapper>
        <Header>
          
            <UsernameImage src={ProfileImg} />
     
        </Header>
  
        <Body>
       
        </Body>
      </Wrapper>
    );
  }
  
  export default PostDetails;
  