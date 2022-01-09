import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-js-pagination";
import './Paging.css';

import FooterImg from "../images/footer.jpeg";
import ProfileImg from "../images/profile.png";

const Wrapper = styled.div`
  height: 100vh;
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
margin-left:  auto;
`;


const Body = styled.div`
margin-top:60px;
width: 60%;
display: flex;
flex-direction: column;
/* border:solid white; */
color: white;
margin-right:auto;
margin-left: auto;
/* height: 100vh; */
`;

const WritingButton = styled.button`
background-color: #BB0000;
border: none;
margin-left: auto;
padding: 8px;
color: white;
width: 100px;
`;

const CategoryContainer = styled.div`
display:flex;
justify-content: right;
margin-top: 10px;
`;
const CategoryButton = styled.button`
color: white;
background-color: transparent;
border:none;

`;

const MainContainer = styled.div`
border-top: 10px solid #C167FF;
border-left: 1px solid #C167FF;
border-right: 1px solid #C167FF;
border-bottom: 1px solid #C167FF;
padding: 10px;
/* display: flex; */
color:white;

/* justify-content: space-between; */
`;
const RowContainer = styled.div`
display: flex;
border-bottom: 1px solid white;

`;

const RowContainer2 = styled.div`
display: flex;
border-bottom: 1px solid white;
background-color: #1D3456;
`;
const Heading = styled.div`

margin-right: 15px;
width: 100px;
`;
const Heading2 = styled.div`
width: 200px;
margin-right: 15px;
`;


function Community() {
  const [page, setPage] = useState(1); 
  const handlePageChange = (page) => { setPage(page); };


  return (
    <Wrapper>
      <Header>
        
          <UsernameImage src={ProfileImg} />
   
      </Header>

      <Body>
        <WritingButton>Writing</WritingButton>
        <CategoryContainer>
            <CategoryButton>All</CategoryButton>
            <CategoryButton>Normal</CategoryButton>
            <CategoryButton>Notice</CategoryButton>
            <CategoryButton>Recommendation</CategoryButton>
        </CategoryContainer>
        <MainContainer> 
           <RowContainer>
            <Heading>Number</Heading>
            <Heading>Category</Heading>
            <Heading2>Title</Heading2>
            <Heading>Writer</Heading>
            <Heading>Date</Heading>
            <Heading>Views</Heading>
          </RowContainer>
          <RowContainer2>
            <Heading>ddd</Heading>
            <Heading>dd</Heading>
            <Heading2>dd</Heading2>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
          </RowContainer2>
          <RowContainer2>
            <Heading>ddd</Heading>
            <Heading>dd</Heading>
            <Heading2>dd</Heading2>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
          </RowContainer2>
          <RowContainer2>
            <Heading>ddd</Heading>
            <Heading>dd</Heading>
            <Heading2>dd</Heading2>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
            <Heading>dd</Heading>
          </RowContainer2>
          <Pagination 
          activePage={page} 
          itemsCountPerPage={10} 
          totalItemsCount={450} 
          pageRangeDisplayed={5} 
          prevPageText={"‹"} 
          nextPageText={"›"}
          onChange={handlePageChange}  />

        </MainContainer>
        
      </Body>
    </Wrapper>
  );
}

export default Community;
