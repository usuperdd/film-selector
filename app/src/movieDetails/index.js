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

const MainImage = styled.img`
  width: 500px;
  height: 500px;
`;
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function MovieDetails() {
  return (
    <Wrapper>
      <Header></Header>
      <BodyContainer>
        <MainImage src={SkywalkersagaImg} />
      </BodyContainer>
    </Wrapper>
  );
}

export default MovieDetails;
