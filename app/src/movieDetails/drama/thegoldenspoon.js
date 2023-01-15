import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import ThegoldenspoonImg from "../../images/thegoldenspoon.jpeg";
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
function Thegoldenspoon() {
  const [episode, setEpisode] = useState("part I(Ep 1 ~ Ep 8)");

  const [episodeData, setEpisodeData] = useState({
    "part I(Ep 1 ~ Ep 8)": {
      introduction:
        "Lee Seung-cheon, a child born in a poor family, who changes fate with a friend, Hwang Taeyong who was born in a wealthy family through a golden spoon and becomes an acquired gold spoon",
    },
    "part II(Ep 9 ~ Ep 16)": {
      introduction:
        "Lee Seung-cheon lives in Hwang Tae-yong's name and enjoys all kinds of wealth, but soon begins to learn the truth of Hwang Tae-yong's family...",
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
        <MainImage src={ThegoldenspoonImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="part I(Ep 1 ~ Ep 8)" onClick={onClickEpisode}>
            part I(Ep 1 ~ Ep 8)
          </Dropdown.Item>
          <Dropdown.Item name="part II(Ep 9 ~ Ep 16)" onClick={onClickEpisode}>
            part II(Ep 9 ~ Ep 16)
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Thegoldenspoon;
