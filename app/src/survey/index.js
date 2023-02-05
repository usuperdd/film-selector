import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ActionImg from "../images/action.jpeg";
import DramaImg from "../images/drama.jpeg";
import FantasyImg from "../images/fantasy.jpeg";
import SFImg from "../images/sf.jpeg";
import RomanceImg from "../images/romance.jpeg";
import ComedyImg from "../images/comedy.jpeg";
import HorrorImg from "../images/horror.jpeg";
import SportsImg from "../images/sports.jpeg";
import AnimationImg from "../images/animation.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #001f3f;
  color: white;
  padding: 20px;
`;
const Heading = styled.h4`
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 80%;
  text-align: center;
  height: 400px;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 280px;
`;

const Title = styled.div`
  font-size: 30px;
  height: 15%;
`;

const ImageContainer = styled.div`
  height: 85%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  border-radius: 7px;
  background-color: #bb0000;
  border: 0;
  font-weight: 600;
  color: white;
  padding: 9px 15px;
  width: 20%;
  margin-bottom: 30px;
  margin-left: auto;
`;

function Survey() {
  const [images, setImages] = useState([]);
  const styles = {
    row: {
      marginBottom: 40,
      //   marginLeft: 20,
    },
  };

  const onClickImage = (e) => {
    if (images.length == 0) {
      setImages([{ image: e, isClicked: true }]);
    } else {
      let isNew = true;
      images.forEach((element) => {
        if (element.image == e) {
          element.isClicked = !element.isClicked;
          console.log(element);
          isNew = false;
          setImages([...images]);
        }
      });
      if (isNew) {
        setImages([...images, { image: e, isClicked: true }]);
      }
    }
  };

  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate("/main");
  };

  return (
    <Wrapper>
      <Heading>Please select your preferred genre</Heading>
      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
          <Box
            onClick={() => onClickImage("ACTION")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Action</Title>
            <ImageContainer>
              <Image src={ActionImg} />
            </ImageContainer>
          </Box>
        </Col>
        
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("DRAMA")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Drama</Title>
            <ImageContainer>
              <Image src={DramaImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("FANTASY")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Fantasy</Title>
            <ImageContainer>
              <Image src={FantasyImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>

      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("SF")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>SF</Title>
            <ImageContainer>
              <Image src={SFImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("COMEDY")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Comedy</Title>
            <ImageContainer>
              <Image src={ComedyImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("ROMANCE")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Romance</Title>
            <ImageContainer>
              <Image src={RomanceImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>

      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("HORROR")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Horror</Title>
            <ImageContainer>
              <Image src={HorrorImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("SPORTS")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Sports</Title>
            <ImageContainer>
              <Image src={SportsImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
        <Box
            onClick={() => onClickImage("ANIMATION")}
            style={{
              opacity: images.find((image) => {
                return image.isClicked == true;
              })
                ? 0.2
                : 1,
            }}
          >
            <Title>Animation</Title>
            <ImageContainer>
              <Image src={AnimationImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>
      <Button onClick={navigateToNext}>Next</Button>
    </Wrapper>
  );
}

export default Survey;
