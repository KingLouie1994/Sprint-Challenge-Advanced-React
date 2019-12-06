import React, { Component } from 'react';
import axios from 'axios';

export default class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                hi :)
            </div>
        )
    }
}