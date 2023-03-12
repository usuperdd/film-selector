import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import firebaseConfigs from "../config/firebase";
import FooterImg from "../images/footer.jpeg";
import ProfileImg from "../images/profile.png";
import { doc, setDoc } from "firebase/firestore/lite";
import { postdoc } from "firebase/firestore/lite";

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
  /* border:solid white; */
  color: white;
  margin-right: auto;
  margin-left: auto;
`;

const MainContainer = styled.div`
  border-top: 10px solid #c167ff;
  border-left: 1px solid #c167ff;
  border-right: 1px solid #c167ff;
  border-bottom: 1px solid #c167ff;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
`;

const TitleInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c167ff;
  color: white;
`;

const ContentsInput = styled.textarea`
  background-color: #1d3456;
  width: 100%;
  border: none;
  min-height: 500px;
  height: 100%;
  color: white;
`;

const EnrollButton = styled.button`
  background-color: #bb0000;
  border: none;
  margin-left: auto;
  padding: 8px;
  color: white;
  width: 100px;
  margin-bottom: 20px;
`;

const Warnings = styled.div`
  margin-bottom: 40px;
`;

function Post() {
  const db = firebaseConfigs.db;
  const location = useLocation();
  const userName = location.state.userId;
  const navigate = useNavigate();

  
  

  const [postId, setPostId] = useState();
  useEffect(async () => {
    const postsRef = await getDocs(collection(db, "posts"));
    console.log(postsRef.docs);
    const postLength = postsRef.docs.length + 1;
  }, [postId]);

  console.log(postId);
  // con
  const [postdoc, setpostdoc ] = useState({ contents: "", title: ""});
  function onChangeInput(e) {
    const { name, value } = e.target;
    setpostdoc({
      ...postdoc,
      [name]: value,
    });
    console.log(postdoc);
  }
  const EnrollButton = async () => {
    await setDoc(doc(db, "posts", postId), {
      title: postdoc.title,
      contents: postdoc.contents,
      writer: userName
    });
    navigate("/postdetails");
  }
    
  
  return (
    <Wrapper>
      <Header>
        <UsernameImage src={ProfileImg} />
      </Header>
      <Body>
        <MainContainer>
          <TitleInput placeholder="Title"
            name="title"
            value={postdoc.title}
            onChange={onChangeInput}
          />
          <ContentsInput placeholder="Contents"
            name="contents"
            value={postdoc.contents}
            onChange={onChangeInput}
          />
        </MainContainer>
        <EnrollButton onClick={EnrollButton}>Enroll</EnrollButton>
        <Warnings>
          You can upload up to 20 MB of image files and up to 50 files. Videos
          can be uploaded in MP4, AVI, MOV, WEBM, etc. formats, up to 50 MB or 3
          images each. Entering an easy password makes it easy for others to
          edit or delete pornography. , discriminatory, demeaning, hateful and
          portrait rights, copyright infringement posts may be subject to civil
          and criminal liability.
        </Warnings>
      </Body>
    </Wrapper>
  );
}

export default Post;
