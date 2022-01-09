import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterImg from "../images/footer.jpeg";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #001f3f;
`;

const Header = styled.div`
  position: static;
  height: 70px;
  width: 100%;
  background-image: url(${FooterImg});
`;

function Main() {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
}

export default Main;
