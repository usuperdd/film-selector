import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../images/footer.jpeg";
import SkywalkersagaImg from "../images/skywalkersaga.jpeg";
import PrevImg from "../images/back.jpeg";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #001f3f;
apptart

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

const UsernameImage1 = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
`;

const UsernameImage2 = styled.img`
  width: 500px;
  height: 500px;

 
`;
const Columnmid = styled.div`
margin-top: 0px;
width: 500px;
height: 800px;
z-index: 1;
`;

function MovieDetails() {
  return <Wrapper>
    <Header>
    <UsernameImage1 src={FooterImg} />
</Header>
    <Columnmid>
    <UsernameImage2 src={SkywalkersagaImg} />
    </Columnmid>
  </Wrapper>;
}

export default MovieDetails;
