import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../../images/footer.jpeg";
import RoundedsquareImg from "../../images/roundedsquare.png";
import ThelordoftheringsImg from "../../images/thelordoftherings.jpeg";
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
function Thelordoftherings() {
  const [episode, setEpisode] = useState(
    "The Lord of the Rings: The Fellowship of the Ring"
  );

  const [episodeData, setEpisodeData] = useState({
    "The Lord of the Rings: The Fellowship of the Ring": {
      introduction:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    },
    "The Lord of the Rings: The Two Towers": {
      introduction:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    },
    "The Lord of the Rings: The Return of the King": {
      introduction:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
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
        <MainImage src={ThelordoftheringsImg} />
      </BodyContainer>
      <ScenarioContainer></ScenarioContainer>

      <SliderWrapper>
        <DropdownButton id="dropdown-basic-button" title={episode}>
          <Dropdown.Item
            name="The Lord of the Rings: The Fellowship of the Ring"
            onClick={onClickEpisode}
          >
            The Lord of the Rings: The Fellowship of the Ring
          </Dropdown.Item>
          <Dropdown.Item
            name="The Lord of the Rings: The Two Towers"
            onClick={onClickEpisode}
          >
            The Lord of the Rings: The Two Towers
          </Dropdown.Item>
          <Dropdown.Item
            name="The Lord of the Rings: The Return of the King"
            onClick={onClickEpisode}
          >
            The Lord of the Rings: The Return of the King
          </Dropdown.Item>
        </DropdownButton>
      </SliderWrapper>

      <IntroductionWrapper>
        <Introduction>{episodeData[episode]["introduction"]}</Introduction>
      </IntroductionWrapper>
    </Wrapper>
  );
}

export default Thelordoftherings;
