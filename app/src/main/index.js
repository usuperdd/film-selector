import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../images/footer.jpeg";
import PrevImg from "../images/back.jpeg";

const Wrapper = styled.div`
  height: 100%;
  background-color: #001f3f;
`;

const Header = styled.div`
  position: static;
  height: 70px;
  width: 100%;
  background-image: url(${FooterImg});
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: black;
  back
  height: 400px;
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
  width: 100px;
  height: 140px;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 20px;
  font-weight: 700;
  text-align: center;
  padding: 50px 0;
`;

const SliderButton = styled.button`
  font-size: 50px;
  color: #dd33ff;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
function Main() {
  const [SFIndex, setSFIndex] = useState({
    first: 0,
    last: 4,
  });
  const [ActionIndex, setActionIndex] = useState({
    first: 0,
    last: 4,
  });
  const [DramaIndex, setDramaIndex] = useState({
    first: 0,
    last: 4,
  });
  const [FanatasyIndex, setFanatasyIndex] = useState({
    first: 0,
    last: 4,
  });
  const [ComedyIndex, setComedyIndex] = useState({
    first: 0,
    last: 4,
  });

  const [RomanceIndex, setRomanceIndex] = useState({
    first: 0,
    last: 4,
  });

  const [HorrorIndex, setHorrorIndex] = useState({
    first: 0,
    last: 4,
  });
  const [SportsIndex, setSportsIndex] = useState({
    first: 0,
    last: 4,
  });

  const [AnimationIndex, setAnimationIndex] = useState({
    first: 0,
    last: 4,
  });

  const SF = ["SF", 2, 3, 4, 5, 6, 7, 8];
  const ACTION = ["ACTION", 2, 3, 4, 5, 6, 7, 8];
  const COMEDY = ["COMEDY", 2, 3, 4, 5, 6, 7, 8];
  const ROMANCE = ["ROMANCE", 2, 3, 4, 5, 6, 7, 8];
  const FANTASY = ["FANTASY", 2, 3, 4, 5, 6, 7, 8];
  const SPORTS = ["SPORTS", 2, 3, 4, 5, 6, 7, 8];
  const HORROR = ["HORROR", 2, 3, 4, 5, 6, 7, 8];
  const DRAMA = ["DRAMA", 2, 3, 4, 5, 6, 7, 8];
  const ANIMATION = ["ANIMATION", 2, 3, 4, 5, 6, 7, 8];

  const nextPage = (type, action) => {
    if (type == "SF") {
      if (action == "prev" && SFIndex.first == 4) {
        setSFIndex({
          first: 0,
          last: 4,
        });
      }
      if (action == "next" && SFIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "ACTION") {
      if (action == "prev" && ActionIndex.first == 4) {
        setSFIndex({
          first: 0,
          last: 4,
        });
      }
      if (action == "next" && ActionIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "COMEDY") {
      if (action == "prev" && ComedyIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && ComedyIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "ROMANCE") {
      if (action == "prev" && RomanceIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && RomanceIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "FANTASY") {
      if (action == "prev" && FanatasyIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && FanatasyIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "SPORTS") {
      if (action == "prev" && SportsIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && SportsIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "HORROR") {
      if (action == "prev" && HorrorIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && HorrorIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "DRAMA") {
      if (action == "prev" && DramaIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && DramaIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "ANIMATION") {
      if (action == "prev" && AnimationIndex.first == 4) {
        setSFIndex({
          first: 0, ///
          last: 4,
        });
      }
      if (action == "next" && AnimationIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    }
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
            {SF.slice(SFIndex.first, SFIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("SF", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("ACTION", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {ACTION.slice(ActionIndex.first, ActionIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("ACTION", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("COMEDY", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {COMEDY.slice(ComedyIndex.first, ComedyIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("COMEDY", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("ROMANCE", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {ROMANCE.slice(RomanceIndex.first, RomanceIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("ROMANCE", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("FANTASY", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {FANTASY.slice(FanatasyIndex.first, FanatasyIndex.last).map(
              (img) => (
                <Block>{img}</Block>
              )
            )}
            <SliderButton onClick={() => nextPage("FANTASY", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("SPORTS", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {SPORTS.slice(SportsIndex.first, SportsIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("SPORTS", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("HORROR", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {HORROR.slice(HorrorIndex.first, HorrorIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("HORROR", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("DRAMA", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {DRAMA.slice(DramaIndex.first, DramaIndex.last).map((img) => (
              <Block>{img}</Block>
            ))}
            <SliderButton onClick={() => nextPage("DRAMA", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>

          <BlocksWrapper>
            <SliderButton onClick={() => nextPage("ANIMATION", "prev")}>
              <span>&#8592;</span>
            </SliderButton>
            {ANIMATION.slice(AnimationIndex.first, AnimationIndex.last).map(
              (img) => (
                <Block>{img}</Block>
              )
            )}
            <SliderButton onClick={() => nextPage("ANIMATION", "next")}>
              <span>&#8594;</span>
            </SliderButton>
          </BlocksWrapper>
        </CommunityWrapper>
      </BodyContainer>
    </Wrapper>
  );
}

export default Main;
