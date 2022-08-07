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
  color: white;
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
`;

const SliderWrapper = styled.div`
  display: flex;
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
function MovieDetails() {
  const [episode, setEpisode] = useState("episode I");

  const [episodeData, setEpisodeData] = useState({
    "episode I": {
      introduction:
        "THE PHANTOM MENACE : Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
    },
    "episode II": {
      introduction:
        "ATTACK OF THE CLONES : There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
    },
    "episode III": {
      introduction:
        "REVENGE OF THE SITH : War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
    },
    "episode IV": {
      introduction:
        "A NEW HOPE : It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
    },
    "episode V": {
      introduction:
        "THE EMPIRE STRIKES BACK : It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....",
    },
    "episode VI": {
      introduction:
        "RETURN OF THE JEDI : Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
    },
    "episode VII": {
      introduction:
        "THE FORCE AWAKENS : Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed. With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts….",
    },
    "episode VIII": {
      introduction:
        "THE LAST JEDI : The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy. Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight. But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....",
    },
    "episode IX": {
      introduction:
        "THE RISE OF SKYWALKER : The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....",
    },
    "Rogue One": {
      introduction: "A Rebellion Built on Hope...",
    },
    Solo: {
      introduction: "",
    },
    "The Mandalorian": {
      introduction: "This is the Way.",
    },
    "Obi-Wan Kenobi": {
      introduction: "BETWEEN DARKNESS AND DEFEAT HOPE SURVIVES",
    },
    Andor: {
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
        <MainImage src={SkywalkersagaImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item name="episode I" onClick={onClickEpisode}>
            episode I
          </Dropdown.Item>
          <Dropdown.Item name="episode II" onClick={onClickEpisode}>
            episode II
          </Dropdown.Item>
          <Dropdown.Item name="episode III" onClick={onClickEpisode}>
            episode III
          </Dropdown.Item>
          <Dropdown.Item name="episode IV" onClick={onClickEpisode}>
            episode IV
          </Dropdown.Item>
          <Dropdown.Item name="episode V" onClick={onClickEpisode}>
            episode V
          </Dropdown.Item>
          <Dropdown.Item name="episode VI" onClick={onClickEpisode}>
            episode VI
          </Dropdown.Item>
          <Dropdown.Item name="episode VII" onClick={onClickEpisode}>
            episode VII
          </Dropdown.Item>
          <Dropdown.Item name="episode VIII" onClick={onClickEpisode}>
            episode VIII
          </Dropdown.Item>
          <Dropdown.Item name="episode IX" onClick={onClickEpisode}>
            episode IX
          </Dropdown.Item>
          <Dropdown.Item name="Rogue One" onClick={onClickEpisode}>
            Rogue One
          </Dropdown.Item>
          <Dropdown.Item name="Solo" onClick={onClickEpisode}>
            Solo
          </Dropdown.Item>
          <Dropdown.Item name="The Mandalorian" onClick={onClickEpisode}>
            The Mandalorian
          </Dropdown.Item>
          <Dropdown.Item name="Obi-Wan Kenobi" onClick={onClickEpisode}>
            Obi-Wan Kenobi
          </Dropdown.Item>
          <Dropdown.Item name="Andor" onClick={onClickEpisode}>
            Andor
          </Dropdown.Item>
          <Dropdown.Item name="jnvjv" onClick={onClickEpisode}>
            jnvjv
          </Dropdown.Item>

        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default MovieDetails;
