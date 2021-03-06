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


const Wrapper = styled.div`
  /* height: 100vh;   */
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

function Survey() {
  const styles = {
    row: {
      marginBottom: 40,
      //   marginLeft: 20,
    },
  };
  return (
    <Wrapper>
      <Heading>Please select your preferred genre</Heading>
      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
          <Box>
            <Title>Action</Title>
            <ImageContainer>
              <Image src={ActionImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Drama</Title>
            <ImageContainer>
              <Image src={DramaImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Fantasy</Title>
            <ImageContainer>
              <Image src={FantasyImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>
      
      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
          <Box>
            <Title>SF</Title>
            <ImageContainer>
              <Image src={SFImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Comedy</Title>
            <ImageContainer>
              <Image src={ComedyImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Romance</Title>
            <ImageContainer>
              <Image src={RomanceImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>

      <Row style={styles.row} className="row justify-content-evenly">
        <Col className="col-3">
          <Box>
            <Title>Horror</Title>
            <ImageContainer>
              <Image src={HorrorImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Sports</Title>
            <ImageContainer>
              <Image src={SportsImg} />
            </ImageContainer>
          </Box>
        </Col>
        <Col className="col-3">
          <Box>
            <Title>Animation</Title>
            <ImageContainer>
              <Image src={AnimationImg} />
            </ImageContainer>
          </Box>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Survey;
