import React, { Component } from 'react';
import './EndingGame.css';

class EndingGame extends Component {
    constructor(props) {
        super(props)
        this.winner = this.props.location.state.winner;
    }

    render() {
        return (
            <div className="victory">
                <img id="house-banner" src={this.winner.houseBanner} alt="housse banner of winner" />
                <h1>You won the game !</h1>
                <img id="winner-avatar" src={this.winner.avatar} alt="winner avatar" />
            </div>
        )
    }
}

export default EndingGame