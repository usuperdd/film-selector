import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import LacasadepapelImg from "../../images/lacasadepapel.jpeg";
import TriangleImg from "../../images/triangle.png";
import PrevImg from "../../images/back.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../index.css"; //

const Wrapper = styled.div`
  height: 100vh;
  background-color: #001f3f;
  color: white;
  padding-bottom: 30px;
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
  display: flex;
  div.four {
    padding: 50px 50px 50px 50px;
  }
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
  background-color: #001f3f;
`;

const SliderWrapper = styled.div`
  /* overflow: auto; */
  margin-left: 50px;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const Introduction = styled.div`
  font-size: 18px;
`;
function Lacasadepapel() {
  const [episode, setEpisode] = useState("part I");

  const [episodeData, setEpisodeData] = useState({
    "part I": {
      introduction:
        "The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.",
    },
    "part II": {
      introduction:
        "The police finds the house where The Professor has planned everything. Tokyo and Berlin are fighting about how to proceed.",
    },
    "part III": {
      introduction:
        "When Rio is captured, a distraught Tokyo turns to the Professor for help. Armed with a bold new plan, they reunite the team in order to rescue him.",
    },
    "part IV": {
      introduction:
        "Anger and grief heighten tensions between the group. The Professor, while in mourning, attempts to make a daring and dangerous escape.",
    },
    "part V": {
      introduction:
        "The Professor faces off with Sierra as Tamayo raises the stakes of the negotiations by calling the army. In the past, Berlin meets with a family member.",
    },
  });
  const onClickEpisode = (e) => {
    const { name } = e.target;

    setEpisode(name);
  };
  return (
    <Wrapper>
      <Header></Header>
      <BodyContainer>
        <MainImage src={LacasadepapelImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="part I" onClick={onClickEpisode}>
            part I
          </Dropdown.Item>
          <Dropdown.Item name="part II" onClick={onClickEpisode}>
            part II
          </Dropdown.Item>
          <Dropdown.Item name="part III" onClick={onClickEpisode}>
            part III
          </Dropdown.Item>
          <Dropdown.Item name="part IV" onClick={onClickEpisode}>
            part IV
          </Dropdown.Item>
          <Dropdown.Item name="part V" onClick={onClickEpisode}>
            part V
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Lacasadepapel;
