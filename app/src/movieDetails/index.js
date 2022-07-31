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

import "./index.css"; //

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
  border-top: 8px solid #dd33ff;
`;

const MainImage = styled.img`
  width: 500px;
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

const SliderWrapper = styled.div`
  display: flex;
  margin-left: 50px;
`;

function MovieDetails() {
  const [episode, setEpisode] = useState("episode");

  const onClickEpisode = (e) => {
    const { name } = e.target;

    setEpisode(name);
  };
  return (
    <Wrapper>
      <Header></Header>
      <BodyContainer>
        <MainImage src={SkywalkersagaImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>
      {/* <SubImage src={RoundedsquareImg} /> */}
      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="episode I" onClick={onClickEpisode}>
            episode I
          </Dropdown.Item>
          <Dropdown.Item name="episode II">episode II</Dropdown.Item>
          <Dropdown.Item name="episode III">episode IV</Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>
    </Wrapper>
  );
}

export default MovieDetails;
