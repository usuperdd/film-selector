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
  font-size: 40px;
  color: black;
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
  const ROMANCE = [1, 2, 3, 4, 5, 6, 7, 8];
  const FANTASY = [1, 2, 3, 4, 5, 6, 7, 8];
  const SPORTS = [1, 2, 3, 4, 5, 6, 7, 8];
  const HORROR = [1, 2, 3, 4, 5, 6, 7, 8];

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
      if (action == "next" && SFIndex.first == 0) {
        setSFIndex({
          first: 4,
          last: 8,
        });
      }
    } else if (type == "COMEDY") {
      if (action == "prev" && ComedyIndex.first == 4) {
        setSFIndex({
          first: 0,
          last: 4,
        });
      }
      if (action == "next" && ComedyIndex.first == 0) {
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
        </CommunityWrapper>
      </BodyContainer>
    </Wrapper>
  );
}

export default Main;
