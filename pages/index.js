import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  `;

const Grid = styled.div`
  display: flex;
`;
const Header = styled.div`
  height: 100px;
  width: 100%;
  align-items: center;
  box-shadow: 0px 0px 50px 0px #ddd;
  border-bottom: 1px solid #fff;
  background: linear-gradient(#fff, #f9f8f8);
  img {
    display: flex;
    height: 100%;
    margin: 0 auto;
  }
`;

export default () => (
  <Grid>
    <GlobalStyle />
    <Header>
      <img src="/GnGlogo.svg" />
    </Header>
  </Grid>
);
