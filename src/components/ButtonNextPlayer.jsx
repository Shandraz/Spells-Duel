// ButtonNextPlayers.jsx
import React, { Component } from 'react';
import './ButtonNextPlayers.css';


class ButtonNextPlayer extends Component {
    constructor(props) {
        super(props)

    }
 
    render() {
        return (
            <button className="ButtonNextPlayers" onClick={() => this.props.nextPlayer()}>
                Next Player
            </button>
        );
    }
}

export default ButtonNextPlayer;
