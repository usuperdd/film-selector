import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import MissionimpossibleImg from "../images/missionimpossible.jpeg";
import FastandfuriousImg from "../images/fastandfurious.jpeg";
import LittlewomenImg from "../images/littlewomen.jpeg";
import LalalandImg from "../images/lalaland.jpeg";
import FooterImg from "../images/footer.jpeg";
import Starwars from "../images/skywalkersaga.jpeg";
import Alien from "../images/alien1.jpeg";
import Planet from "../images/planetoftheapes.jpeg";
import Matrix from "../images/thematrix.jpeg";
import LacasadepapelImg from "../images/lacasadepapel.jpeg";
import OnedollarlawyerImg from "../images/onedollarlawyer.jpeg";
import StoveleagueImg from "../images/stoveleague.jpeg";
import ThegoldenspoonImg from "../images/thegoldenspoon.jpeg";
import RebornrichImg from "../images/rebornrich.jpeg";
import AnnabelleImg from "../images/annabelle.jpeg";
import ItImg from "../images/it.jpeg";
import TheconjuringImg from "../images/theconjuring.jpeg";
import ThenunImg from "../images/thenun.jpeg";
import AttackontitanImg from "../images/attackontitan.jpeg";
import ChainsawmanImg from "../images/chainsawman.jpeg";
import AvatarImg from "../images/avatar.jpeg";
import FantasticbeastsImg from "../images/fantasticbeasts.jpeg";
import ThelordoftheringsImg from "../images/thelordoftherings.jpeg";
import HomealoneImg from "../images/homealone.jpeg";
import HarrypotterImg from "../images/harrypotter.jpeg";
import CharlieImg from "../images/charlie.jpeg";
import ParasiteImg from "../images/parasite.jpeg";
import BadboysImg from "../images/badboys.jpeg";
import TopgunImg from "../images/topgun.jpeg";
import CoachcarterImg from "../images/coachcarter.jpeg";
import FordvferrariImg from "../images/fordvferrari.jpeg";
import AbouttimeImg from "../images/abouttime.jpeg";

import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
  min-width: 100vh;
  width: 100%;
  background-color: #001f3f;
`;

const Header = styled.div`
  position: static;
  height: 70px;
  /* width: 100%; */
  background-image: url(${FooterImg});
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: black;
`;
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CommunityWrapper = styled.div`
  display: flex;
  padding-left: 40px;
  margin-top: 50px;
  flex-direction: column;
  height: 100%;
  background-color: black;
`;

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const Block = styled.div`
  background-color: #a40000;
  width: 180px;
  height: 200px;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SliderButton = styled.button`
  font-size: 50px;
  color: #dd33ff;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const images = location.state;

  const [indexes, setIndexes] = useState({
    SF: {
      first: 0,
      last: 3,
      images: [
        "SF",
        { image: `${Starwars}`, link: "/movie/sf/starwars" },
        { image: `${Alien}`, link: "/movie/sf/alien" },
        { image: `${Planet}`, link: "/movie/sf/planetoftheapes" },
        { image: `${Matrix}`, link: "/movie/sf/thematrix" },
      ],
    },
    ACTION: {
      first: 0,
      last: 3,
      images: [
        "ACTION",
        {
          image: `${TopgunImg}`,
          link: "/movie/action/topgun",
        },
        {
          image: `${FastandfuriousImg}`,
          link: "/movie/action/fastandfurious",
        },
        {
          image: `${MissionimpossibleImg}`,
          link: "/movie/action/missionimpossible",
        },
      ],
    },
    COMEDY: {
      first: 0,
      last: 3,
      images: [
        "COMEDY",
        {
          image: `${HomealoneImg}`,
          link: "/movie/comedy/homealone",
        },
        {
          image: `${CharlieImg}`,
          link: "/movie/comedy/charlieandthechocolatefactory",
        },
        {
          image: `${ParasiteImg}`,
          link: "/movie/comedy/parasite",
        },
        {
          image: `${BadboysImg}`,
          link: "/movie/comedy/parasite",
        },
      ],
    },
    DRAMA: {
      first: 0,
      last: 3,
      images: [
        "DRAMA",
        {
          image: `${LacasadepapelImg}`,
          link: "/movie/drama/lacasadepapel",
        },
        {
          image: `${OnedollarlawyerImg}`,
          link: "/movie/drama/onedollarlawyer",
        },
        {
          image: `${StoveleagueImg}`,
          link: "/movie/drama/stoveleague",
        },
        {
          image: `${ThegoldenspoonImg}`,
          link: "/movie/drama/thegoldenspoon",
        },
        {
          image: `${RebornrichImg}`,
          link: "/movie/drama/rebornrich",
        },
      ],
    },
    FANTASY: {
      first: 0,
      last: 3,
      images: [
        "FANTASY",
        {
          image: `${AvatarImg}`,
          link: "/movie/fantasy/avatar",
        },
        {
          image: `${FantasticbeastsImg}`,
          link: "/movie/fantasy/fantasticbeasts",
        },
        {
          image: `${ThelordoftheringsImg}`,
          link: "/movie/fantasy/thelordoftherings",
        },
        {
          image: `${HarrypotterImg}`,
          link: "/movie/fantasy/harrypoter",
        },
      ],
    },
    HORROR: {
      first: 0,
      last: 3,
      images: [
        "HORROR",
        {
          image: `${AnnabelleImg}`,
          link: "/movie/horror/annabelle",
        },
        {
          image: `${ItImg}`,
          link: "/movie/horror/it",
        },
        {
          image: `${TheconjuringImg}`,
          link: "/movie/horror/theconjuring",
        },
        {
          image: `${ThenunImg}`,
          link: "/movie/horror/thenun",
        },
      ],
    },
    ROMANCE: {
      first: 0,
      last: 3,
      images: [
        "ROMANCE",
        {
          image: `${AbouttimeImg}`,
          link: "/movie/romance/abouttime",
        },
        {
          image: `${LalalandImg}`,
          link: "/movie/romance/lalaland",
        },
        {
          image: `${LittlewomenImg}`,
          link: "/movie/romance/littlewomens",
        },
      ],
    },
    ANIMATION: {
      first: 0,
      last: 3,
      images: [
        "ANIMATION",
        {
          image: `${AttackontitanImg}`,
          link: "/movie/animation/attackontitan",
        },
        {
          image: `${ChainsawmanImg}`,
          link: "/movie/animation/chainsawman",
        },
      ],
    },
    SPORTS: {
      first: 0,
      last: 3,
      images: [
        "SPORTS",
        {
          image: `${CoachcarterImg}`,
          link: "/movie/sports/coachcarter",
        },
        {
          image: `${FordvferrariImg}`,
          link: "/movie/sports/fordvferrari",
        },
      ],
    },
  });

  const nextPage = (type, action) => {
    if (action == "prev" && indexes[type].first == 3) {
      let temp = indexes[type];
      let obj = {
        [type]: { ...temp, first: 0, last: 3 },
      };

      setIndexes({
        ...indexes,
        ...obj,
      });
    }
    if (action == "next" && indexes[type].first == 0) {
      let temp = indexes[type];

      let obj = {
        [type]: { ...temp, first: 3, last: temp.images.length },
      };

      setIndexes({
        ...indexes,
        ...obj,
      });
    }
    console.log(indexes);
  };

  const navigateToMovie = (link) => {
    navigate(link);
  };

  function Sliders({ type }) {
    const images = indexes[type].images;
    const first = indexes[type].first;
    const last = indexes[type].last;

    return (
      <>
        <SliderButton onClick={() => nextPage(type, "prev")}>
          <span>&#8592;</span>
        </SliderButton>
        {images.slice(first, last).map((lst, index) => {
          return (
            <Block>
              {first == 0 && index == 0 ? (
                <p>{type}</p>
              ) : (
                <PosterImg
                  src={lst.image}
                  onClick={() => navigateToMovie(lst.link)}
                ></PosterImg>
              )}
            </Block>
          );
        })}
        <SliderButton onClick={() => nextPage(type, "next")}>
          <span>&#8594;</span>
        </SliderButton>
      </>
    );
  }

  return (
    <Wrapper>
      <Header></Header>
      <ImageContainer></ImageContainer>
      <BodyContainer>
        <CommunityWrapper>
          {images.map((movieImage) => {
            return (
              <BlocksWrapper>
                <Sliders type={movieImage.image}></Sliders>
              </BlocksWrapper>
            );
          })}
        </CommunityWrapper>
      </BodyContainer>
    </Wrapper>
  );
}

export default Main;
