import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import FooterImg from "../images/footer.jpeg";
import ProfileImg from "../images/profile.png";
import EmailImg from "../images/email.jpeg";

const Wrapper = styled.div`
  height: 100%;
  background-color: #001f3f;
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

const UsernameImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
`;

const Body = styled.div`
  margin-top: 60px;
  width: 60%;
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 30px;
`;

const MainContainer = styled.div`
  border-top: 10px solid #c167ff;
  border-left: 1px solid #c167ff;
  border-right: 1px solid #c167ff;
  border-bottom: 1px solid #c167ff;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  height: 600px;
`;

const Heading = styled.div`
  margin-right: 15px;
`;
const Heading2 = styled.div`
  margin-right: 15px;
  border-bottom: 1px solid #c167ff;
`;
const CommentsContainer = styled.div`
  margin-top: -18px;
  border-left: 1px solid #c167ff;
  border-right: 1px solid #c167ff;
  border-bottom: 1px solid #c167ff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CommentsContainer2 = styled(CommentsContainer)`
  margin-top: 0px;
`;
const CommentWriterContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const WriteProfileImg = styled.img`
  border-radius: 40px;
  height: 100%;
  margin-right: 10px;
  max-width: 100%;
`;
const Comments = styled.textarea`
  color: white;
  background-color: transparent;
  height: 150px;
  border: 1px solid white !important;
`;
const CommentsText = styled.div`
  color: white;
  height: 100%;
  border: none;
`;
const DeleteButton = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-left: auto;
`;
function Postdetails() {
  const location = useLocation();
  const postId = location.state.postId;
  console.log(postId);
  return (
    <Wrapper>
      <Header>
        <UsernameImage src={ProfileImg} />
      </Header>

      <Body>
        <MainContainer>
          <Heading>Title</Heading>
          <Heading>Writer | Date</Heading>
          <Heading2>Views | Recommendation | Comments</Heading2>
        </MainContainer>
        {/* <CommentsContainer>
          <CommentWriterContainer>
            <WriteProfileImg src={EmailImg} />
            Writer
          </CommentWriterContainer>
          <Comments />
        </CommentsContainer>
        <CommentsContainer2>
          <CommentWriterContainer>
            <WriteProfileImg src={EmailImg} />
            Writer
          </CommentWriterContainer>
          <CommentsText>ddd</CommentsText>
          <DeleteButton> X </DeleteButton>
        </CommentsContainer2>
        <CommentsContainer2>
          <CommentWriterContainer>
            <WriteProfileImg src={EmailImg} />
            Writer
          </CommentWriterContainer>
          <CommentsText>ddd</CommentsText>
          <DeleteButton> X </DeleteButton>
        </CommentsContainer2> */}
      </Body>
    </Wrapper>
  );
}

export default Postdetails;
