import styled from "styled-components";
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UsernameImg from "../login/username.png";

const Wrapper = styled.div`
height: 100vh;  
background-color: #001F3F;
`;



const ColumnLeft = styled.div`
 background-size: cover; 
 width: 100%;
background-image: url("https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?k=20&m=1271522601&s=612x612&w=0&h=y3NLBCVMWO8wHGwjEcXIuGOSL_0K6iFTvySCM-X5TxM=");
height: 100vh;
`;

const ColumnRight = styled.div`
margin-top:20%;
`;


const FormWrapper = styled.div`
margin-left: auto;
margin-right: auto;
color: white;
padding-left:100px;
`;


const WelcomeHeading = styled.h1`
color: white;
text-align: center;
font-size: 38px;
font-weight: bold;
line-height: 44px;
margin-top: 20px;
margin-bottom: 20px;
`;

const UsernameImage = styled.img`
margin-top: 30px;
width: 35px;
height: 35px;

`;


const UserInput = styled.input``;

// const RightHalf = styled.div`
// background-color:#001F3F;
// margin-left: 500px;
// `;

function Login() { 
    return (
        <Wrapper>
            <Row noGutter>
                <Col>
                    <ColumnLeft>
                    </ColumnLeft>
                </Col>
                <Col>
                <ColumnRight>
                <FormWrapper>
                    <WelcomeHeading>
                        Welcome To Film Selector!
                    </WelcomeHeading>
                  
                    <UsernameImage src={UsernameImg}>

                    </UsernameImage>
                </FormWrapper>
                </ColumnRight>
                </Col>
            </Row>
         

        </Wrapper>
    )
}


export default Login;