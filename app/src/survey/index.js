import styled from "styled-components";
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ActionImg from "../images/action.jpeg";
import DramaImg from "../images/drama.jpeg";
import FantasyImg from "../images/fantasy.jpeg";
import ScienceFiction from "../images/sf.jpeg";

const Wrapper = styled.div`
/* height: 100vh;   */
background-color: #001F3F;
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
color:white;
background-color: black;
display: flex;
flex-direction: column;

`;

const Title  = styled.div`
height: 15%;
font-size:30px;
`;

const ImageContainer = styled.div`
display: flex;
`;

const Image = styled.img`
width: 100%;
height: auto;
/* object-fit: cover; */
`;



function Survey() {
    const styles = {
        row: {
            marginBottom: 40
        }
    }
    return (
        <Wrapper>
            <Heading>Please select your preferred genre</Heading>
            <Row style={styles.row}>
                <Col>
                    <Box>
                        <Title>Action </Title>
                        <ImageContainer>dd</ImageContainer>
                        {/* <Image src={ActionImg}/> */}
                        
                    {/* <Image src={ActionImg}/>  */}
                      
                    </Box>
                </Col>
                <Col>
                    <Box>
                        {/* Drama
                        <Image src={DramaImg}/> */}
                    </Box>
                </Col>
                <Col>
                    <Box>
                        {/* Fantasy
                        <Image src={FantasyImg}/> */}
                    </Box>
                </Col>
            </Row>
            {/* <Row style={styles.row}>
                <Col>
                    <Box>
                        SF
                        <Image src={ScienceFiction}/>
                    </Box>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
           */}
          
        </Wrapper>
    )
}

export default Survey;