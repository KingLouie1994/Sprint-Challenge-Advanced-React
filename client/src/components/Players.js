import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import PlayerCard from './PlayerCard';

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        const player = response.data;
        this.setState({ player });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        {this.state.player.map(player => (
          <PlayerCard  player={player} key={player.id}/>
        ))}
      </Container>
    );
  }
}

// Styling here:

const Container = styled.div`
display: flex;  
flex-wrap: wrap;
margin: 2%;
justify-content: space-between;
`;

