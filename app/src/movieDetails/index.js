import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../images/footer.jpeg";
import RoundedsquareImg from "../images/roundedsquare.png";
import SkywalkersagaImg from "../images/skywalkersaga.jpeg";
import TriangleImg from "../images/triangle.png";
import PrevImg from "../images/back.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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

const ScenarioContainer = styled.hr`
  border-top: 4px solid #c167ff;
`;

const MainImage = styled.img`
  width: git500px;
  height: 500px;
`;
const SubImage = styled.img`
  width: 200px;
  height: 100px;
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
      <ScenarioContainer></ScenarioContainer>
      {/* <SubImage src={RoundedsquareImg} /> */}
      <DropdownButton id="dropdown-basic-button" title="Add">
        <Dropdown.Item name="episode" href="#/action-1">
          Person
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Group</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </Wrapper>
  );
}

export default MovieDetails;
