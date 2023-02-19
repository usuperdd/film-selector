import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import Alien1Img from "../../images/alien1.jpeg";
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
function Alien() {
  const [episode, setEpisode] = useState("ALIEN");

  const [episodeData, setEpisodeData] = useState({
    ALIEN: {
      introduction:
        "A word of warning... Sometimes the scariest things come from within. It's Alien, the 8th passenger. In space no one can hear you scream.",
    },
    ALIENS: {
      introduction: "This Time It's War",
    },
    "ALIEN 3": {
      introduction:
        "1979. It popped out of the body. 1986. It seemed to be gone forever. However, in 1993. We must see its disastrous end. So... back!",
    },
    "ALIEN RESURRECTION": {
      introduction:
        "It's been more than 200 years...The beginning has just started. It's already too late. Beyond salvation. Hell gives birth. Witness the resurrection.",
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
        <MainImage src={Alien1Img} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="ALIEN" onClick={onClickEpisode}>
            ALIEN
          </Dropdown.Item>
          <Dropdown.Item name="ALIENS" onClick={onClickEpisode}>
            ALIENS
          </Dropdown.Item>
          <Dropdown.Item name="ALIEN 3" onClick={onClickEpisode}>
            ALIEN 3
          </Dropdown.Item>
          <Dropdown.Item name="ALIEN RESURRECTION" onClick={onClickEpisode}>
            ALIEN RESURRECTION
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Alien;
