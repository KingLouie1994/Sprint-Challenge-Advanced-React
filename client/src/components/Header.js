import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <Head>
        <h1>Ranking of most searched sportswomen:</h1>
      </Head>
    );
  }
}

// Styling here:

const Head = styled.div`
  background-color: rgb(32, 34, 42);
  color: rgb(97, 218, 251);
  padding: 1.5vw;
`;
