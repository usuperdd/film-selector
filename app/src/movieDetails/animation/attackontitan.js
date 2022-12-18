import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import AttackontitanImg from "../../images/attackontitan.jpeg";
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
function Attackontitan() {
  const [episode, setEpisode] = useState("season I");

  const [episodeData, setEpisodeData] = useState({
    "season I": {
      introduction:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    },
    "season II": {
      introduction: "The Survey Corps, to which Eren Yeager and his friends belong, succeeded in capturing Female titan, but at that time another incident occurred and the Survey Corps began to reach the truth about the walls and the titans...",
   
    },
    "season III part 1": {
        introduction: "As the Survey Corps gets closer to the truth about the people inside the wall, they are attacked by the same people who are not titans without knowing why.",
     
    },
    "season III part 2": {
        introduction: "When the government is replaced and Queen Historia ascends the throne, the Survey Corps gains the support of the crowd and the military, and finally begins an operation to recapture Wall Maria and Shiganshina, the hometowns of Eren and his friends, which were taken away by titans.",
     
      },
      "Final season part 1": {
        introduction: "The enemy of humanity within the wall was not the titans, but the world outside the wall. Eren Yeager To save his people, the Eldians, who are discriminated against, hated, and feared, he makes a decision with the help of his half-brother...",
     
      },
      "Final season part 2": {
        introduction: "Eren Yeager is about to start Rumbling to eliminate all humanity outside the walls. To stop this, the world is trying to stop it by sending troops to Paradis Island...",
     
      },
      "Final season part 3": {
        introduction: "",
     
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
        <MainImage src={AttackontitanImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="season I" onClick={onClickEpisode}>
            season I
          </Dropdown.Item>
          <Dropdown.Item name="season II" onClick={onClickEpisode}>
            season II
          </Dropdown.Item>
          <Dropdown.Item name="season III part 1" onClick={onClickEpisode}>
            season III part 1
          </Dropdown.Item>
          <Dropdown.Item name="season III part 2" onClick={onClickEpisode}>
            season III part 2
          </Dropdown.Item>
          <Dropdown.Item name="Final season part 1" onClick={onClickEpisode}>
            Final season part 1
          </Dropdown.Item>
          <Dropdown.Item name="Final season part 2" onClick={onClickEpisode}>
            Final season part 2
          </Dropdown.Item>
          <Dropdown.Item name="Final season part 3" onClick={onClickEpisode}>
            Final season part 3
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Attackontitan;
