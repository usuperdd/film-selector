import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import HarrypotterImg from "../../images/harrypotter.jpeg";
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
function Harrypotter() {
  const [episode, setEpisode] = useState(
    "Harry Potter and the Sorcerer's Stone"
  );

  const [episodeData, setEpisodeData] = useState({
    "Harry Potter and the Sorcerer's Stone": {
      introduction:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    },
    "Harry Potter and the Chamber of Secrets": {
      introduction:
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
    },
    "Harry Potter and the Prisoner of Azkaban": {
      introduction:
        "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
    },
    "Harry Potter and the Goblet of Fire": {
      introduction:
        "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    },
    "Harry Potter and the Order of the Phoenix": {
      introduction:
        "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
    },
    "Harry Potter and the Half-Blood Prince": {
      introduction:
        "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past.",
    },
    "Harry Potter and the Deathly Hallows: Part 1": {
      introduction:
        "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
    },
    "Harry Potter and the Deathly Hallows: Part 2": {
      introduction:
        "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
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
        <MainImage src={HarrypotterImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item
            name="Harry Potter and the Sorcerer's Stone"
            onClick={onClickEpisode}
          >
            Harry Potter and the Sorcerer's Stone
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Chamber of Secrets"
            onClick={onClickEpisode}
          >
            Harry Potter and the Chamber of Secrets
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Prisoner of Azkaban"
            onClick={onClickEpisode}
          >
            Harry Potter and the Prisoner of Azkaban
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Goblet of Fire"
            onClick={onClickEpisode}
          >
            Harry Potter and the Goblet of Fire
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Order of the Phoenix"
            onClick={onClickEpisode}
          >
            Harry Potter and the Order of the Phoenix
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Half-Blood Prince"
            onClick={onClickEpisode}
          >
            Harry Potter and the Half-Blood Prince
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Deathly Hallows: Part 1"
            onClick={onClickEpisode}
          >
            Harry Potter and the Deathly Hallows: Part 1
          </Dropdown.Item>
          <Dropdown.Item
            name="Harry Potter and the Deathly Hallows: Part 2"
            onClick={onClickEpisode}
          >
            Harry Potter and the Deathly Hallows: Part 2
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Harrypotter;
