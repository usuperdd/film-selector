import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

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

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
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

  const [SFIndex, setSFIndex] = useState({
    first: 0,
    last: 3,
  });
  const [ActionIndex, setActionIndex] = useState({
    first: 0,
    last: 3,
  });
  const [DramaIndex, setDramaIndex] = useState({
    first: 0,
    last: 3,
  });
  const [FanatasyIndex, setFanatasyIndex] = useState({
    first: 0,
    last: 3,
  });
  const [ComedyIndex, setComedyIndex] = useState({
    first: 0,
    last: 3,
  });

  const [RomanceIndex, setRomanceIndex] = useState({
    first: 0,
    last: 3,
  });

  const [HorrorIndex, setHorrorIndex] = useState({
    first: 0,
    last: 3,
  });

  const [AnimationIndex, setAnimationIndex] = useState({
    first: 0,
    last: 3,
  });

  const [SportsIndex, setSportsIndex] = useState({
    first: 0,
    last: 3,
  });

  const SF = [
    "SF",
    { image: `${Starwars}`, link: "/movie/sf/starwars" },
    { image: `${Alien}`, link: "/movie/sf/alien" },

    { image: `${Planet}`, link: "/movie/sf/planetoftheapes" },
    { image: `${Matrix}`, link: "/movie/sf/thematrix" },
  ];

  const DRAMA = [
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
  ];

  const HORROR = [
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
  ];

  const ANIMATION = [
    "ANIMATION",
    {
      image: `${AttackontitanImg}`,
      link: "/movie/animation/attackontitan",
    },
    {
      image: `${ChainsawmanImg}`,
      link: "/movie/animation/chainsawman",
    },
  ];
  const FANTASY = [
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
  ];

  const COMEDY = [
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
  ];

  const ACTION = [
    "ACTION",
    {
      image: `${TopgunImg}`,
      link: "/movie/action/topgun",
    },
  ];
  const SPORTS = [
    "SPORTS",
    {
      image: `${CoachcarterImg}`,
      link: "/movie/sports/coachcarter",
    },
    {
      image: `${FordvferrariImg}`,
      link: "/movie/sports/fordvferrari",
    },
  ];

  // const ROMANCE = ["ROMANCE", 2, 3, 4, 5, 6, 7, 8];

  const nextPage = (type, action) => {
    if (type == "SF") {
      if (action == "prev" && SFIndex.first == 3) {
        setSFIndex({
          first: 0,
          last: 3,
        });
      }
      if (action == "next" && SFIndex.first == 0) {
        console.log(SF.length);
        setSFIndex({
          first: 3,
          last: SF.length,
        });
      }
    } else if (type == "DRAMA") {
      if (action == "prev" && DramaIndex.first == 3) {
        setDramaIndex({
          first: 0,
          last: 3,
        });
      }
      if (action == "next" && DramaIndex.first == 0) {
        setDramaIndex({
          first: 3,
          last: DRAMA.length,
        });
      }
    } else if (type == "HORROR") {
      if (action == "prev" && HorrorIndex.first == 3) {
        setHorrorIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && HorrorIndex.first == 0) {
        setHorrorIndex({
          first: 3,
          last: HORROR.length,
        });
      }
    } else if (type == "ANIMATION") {
      if (action == "prev" && AnimationIndex.first == 3) {
        setAnimationIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && AnimationIndex.first == 0) {
        setAnimationIndex({
          first: 3,
          last: Animation.length,
        });
      }
    } else if (type == "ACTION") {
      if (action == "prev" && ActionIndex.first == 3) {
        setActionIndex({
          first: 0,
          last: 3,
        });
      }
      if (action == "next" && ActionIndex.first == 0) {
        setActionIndex({
          first: 3,
          last: 6,
        });
      }
    } else if (type == "COMEDY") {
      if (action == "prev" && ComedyIndex.first == 3) {
        setComedyIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && ComedyIndex.first == 0) {
        setComedyIndex({
          first: 3,
          last: 6,
        });
      }
    } else if (type == "ROMANCE") {
      if (action == "prev" && RomanceIndex.first == 3) {
        setRomanceIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && RomanceIndex.first == 0) {
        setRomanceIndex({
          first: 3,
          last: 6,
        });
      }
    } else if (type == "FANTASY") {
      if (action == "prev" && FanatasyIndex.first == 3) {
        setFanatasyIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && FanatasyIndex.first == 0) {
        setFanatasyIndex({
          first: 3,
          last: 6,
        });
      }
    } else if (type == "SPORTS") {
      if (action == "prev" && SportsIndex.first == 3) {
        setSportsIndex({
          first: 0, ///
          last: 3,
        });
      }
      if (action == "next" && SportsIndex.first == 0) {
        setSportsIndex({
          first: 3,
          last: 6,
        });
      }
    }
  };
  const navigateToMovie = (link) => {
    navigate(link);
  };
  return (
    <Wrapper>
      <Header></Header>
      <ImageContainer></ImageContainer>
      <BodyContainer>
        <CommunityWrapper>
          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("SF", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {SF.slice(SFIndex.first, SFIndex.last).map((lst, index) => (
              <Block>
                {SFIndex.first == 0 && index == 0 ? (
                  <p>{lst}</p>
                ) : (
                  <PosterImg
                    src={lst.image}
                    onClick={() => navigateToMovie(lst.link)}
                  ></PosterImg>
                )}
              </Block>
            ))}
            <SliderButton onClick={() => nextPage("SF", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("DRAMA", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {DRAMA.slice(DramaIndex.first, DramaIndex.last).map(
              (lst, index) => (
                <Block>
                  {DramaIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("DRAMA", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("HORROR", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {HORROR.slice(HorrorIndex.first, HorrorIndex.last).map(
              (lst, index) => (
                <Block>
                  {HorrorIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("HORROR", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("ANIMATION", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {ANIMATION.slice(AnimationIndex.first, AnimationIndex.last).map(
              (lst, index) => (
                <Block>
                  {AnimationIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("ANIMATION", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("FANTASY", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {FANTASY.slice(FanatasyIndex.first, FanatasyIndex.last).map(
              (lst, index) => (
                <Block>
                  {FanatasyIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("FANTASY", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("COMEDY", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {COMEDY.slice(ComedyIndex.first, ComedyIndex.last).map(
              (lst, index) => (
                <Block>
                  {ComedyIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("COMEDY", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("ACTION", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {ACTION.slice(ActionIndex.first, ActionIndex.last).map(
              (lst, index) => (
                <Block>
                  {ActionIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("ACTION", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("SPORTS", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {SPORTS.slice(SportsIndex.first, SportsIndex.last).map(
              (lst, index) => (
                <Block>
                  {SportsIndex.first == 0 && index == 0 ? (
                    <p>{lst}</p>
                  ) : (
                    <PosterImg
                      src={lst.image}
                      onClick={() => navigateToMovie(lst.link)}
                    ></PosterImg>
                  )}
                </Block>
              )
            )}
            <SliderButton onClick={() => nextPage("SPORTS", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>
        </CommunityWrapper>
      </BodyContainer>
    </Wrapper>
  );
}

export default Main;
