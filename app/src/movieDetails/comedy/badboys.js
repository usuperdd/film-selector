import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import BadboysImg from "../../images/badboys.jpeg";
import TriangleImg from "../../images/triangle.png";
import PrevImg from "../../images/back.jpeg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../index.css"; //

const Wrapper = styled.div`
  height: 100%;
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
function Badboys() {
  const [episode, setEpisode] = useState("Bad Boys");

  const [episodeData, setEpisodeData] = useState({
    "Bad Boys": {
      introduction:
        "Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct.",
    },
    "Bad Boys II": {
      introduction:
        "Two loose-cannon narcotics cops investigate the flow of Ecstasy into Florida from a Cuban drug cartel.",
    },
    "Bad Boys for Life": {
      introduction:
        "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
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
        <MainImage src={BadboysImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="Bad Boys" onClick={onClickEpisode}>
          Bad Boys
          </Dropdown.Item>
          <Dropdown.Item name="Bad Boys II" onClick={onClickEpisode}>
          Bad Boys II
          </Dropdown.Item>
          <Dropdown.Item name="Bad Boys for Life" onClick={onClickEpisode}>
          Bad Boys for Life
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Badboys

