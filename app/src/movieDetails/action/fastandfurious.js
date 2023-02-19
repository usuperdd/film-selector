import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import FastandfuriousImg from "../../images/fastandfurious.jpeg";
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
function Fastandfurious() {
  const [episode, setEpisode] = useState("The Fast & The Furious");

  const [episodeData, setEpisodeData] = useState({
    "The Fast & The Furious": {
      introduction:
        "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
    },
    "2 Fast 2 Furious": {
      introduction:
        "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.",
    },
    "The Fast and the Furious: Tokyo Drift": {
      introduction:
        "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
    },
    "Fast & Furious": {
      introduction:
        "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
    },
    "Fast Five": {
      introduction:
        "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
    },
    "Fast & Furious 6": {
      introduction:
        "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
    },
    "Fast & Furious 7": {
      introduction:
        "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    },
    "The Fate of the Furious": {
      introduction:
        "When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    },
    "F9: The Fast Saga": {
      introduction:
        "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
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
        <MainImage src={FastandfuriousImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="The Fast & The Furious" onClick={onClickEpisode}>
            The Fast & The Furious
          </Dropdown.Item>
          <Dropdown.Item name="2 Fast 2 Furious" onClick={onClickEpisode}>
            2 Fast 2 Furious
          </Dropdown.Item>
          <Dropdown.Item
            name="The Fast and the Furious: Tokyo Drift"
            onClick={onClickEpisode}
          >
            The Fast and the Furious: Tokyo Drift
          </Dropdown.Item>
          <Dropdown.Item name="Fast & Furious" onClick={onClickEpisode}>
            Fast & Furious
          </Dropdown.Item>
          <Dropdown.Item name="Fast Five" onClick={onClickEpisode}>
            Fast Five
          </Dropdown.Item>
          <Dropdown.Item name="Fast & Furious 6" onClick={onClickEpisode}>
            Fast & Furious 6
          </Dropdown.Item>
          <Dropdown.Item name="Fast & Furious 7" onClick={onClickEpisode}>
            Fast & Furious 7
          </Dropdown.Item>
          <Dropdown.Item
            name="The Fate of the Furious"
            onClick={onClickEpisode}
          >
            The Fate of the Furious
          </Dropdown.Item>

          <Dropdown.Item name="F9: The Fast Saga" onClick={onClickEpisode}>
            F9: The Fast Saga
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Fastandfurious;
