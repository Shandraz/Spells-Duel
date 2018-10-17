//GameZone.jsx
import React, { Component } from 'react';
import Gride from './Gride';
import './GameZone.css';




class GameZone extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const audio1 = new Audio();

    audio1.src = "https://ia800805.us.archive.org/4/items/11TheQuidditchMatch/2001%20-%20Harry%20Potter%20and%20The%20Sorcerer%27s%20Stone/08%20-%20Mr.%20Longbottom%20Flies.mp3";
    audio1.volume = '0.5';
    audio1.play();
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SPELL OF DUEL</h1>
        </header>
        <Gride />
        <br />
      </div>
    );
  }
}

export default GameZone;
