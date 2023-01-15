import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import HomealoneImg from "../../images/homealone.jpeg";
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
function Homealone() {
  const [episode, setEpisode] = useState("Home Alone");

  const [episodeData, setEpisodeData] = useState({
    "Home Alone": {
      introduction:
        "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve.",
    },
    "Home Alone 2: Lost in New York": {
      introduction:
        "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.",
    },
    "Home Alone 3": {
      introduction:
        "Alex Pruitt, an 8-year-old boy living in Chicago, must fend off international spies who seek a top-secret computer chip in his toy car.",
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
        <MainImage src={HomealoneImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="Home Alone" onClick={onClickEpisode}>
            Home Alone
          </Dropdown.Item>
          <Dropdown.Item
            name="Home Alone 2: Lost in New York"
            onClick={onClickEpisode}
          >
            Home Alone 2: Lost in New York
          </Dropdown.Item>
          <Dropdown.Item name="Home Alone 3" onClick={onClickEpisode}>
            Home Alone 3
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Homealone;
