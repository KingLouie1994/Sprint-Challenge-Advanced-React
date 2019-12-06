import React, { Component } from "react";
import styled from "styled-components";

export default class PlayerCard extends Component {
  render() {
    return (
      <Card>
        <h3>Name: {this.props.player.name}</h3>
        <h4>From: {this.props.player.country}</h4>
        <h4>Searches: {this.props.player.searches}</h4>
        <h4>Ranking: {this.props.player.id + 1}</h4>
      </Card>
    );
  }
}

// Styling here:

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  width: 25%;
  padding: 1%;
  border-radius: 5%;
  margin: 3%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
