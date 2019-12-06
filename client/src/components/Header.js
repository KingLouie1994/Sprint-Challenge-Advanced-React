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
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 3%;
  width: 100%;
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  margin-bottom: 2rem;
  background-color: #1f2022;
  border: none;

  h1 {
    color: white;
  }`;
