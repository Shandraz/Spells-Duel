// Gride.jsx
import React, { Component } from 'react';
import './Gride.css';
import Cell from './Cell';
import Player from './Player';
import ButtonNextPlayer from './ButtonNextPlayer';
import Menusplay from './Menusplay';
import './ButtonNextPlayers.css';
import { Route, BrowserRouter, Switch, NavLink, Link, Redirect } from 'react-router-dom';


class Gride extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNum: 2,
      turnNum: 0,
      currentPlayer: 0,
      showEndGame: false,
      players: [
        {
          name: 'Harry',
          avatar: 'https://img.lght.pics/2TqC.png',
          houseBanner: 'https://img.lght.pics/2mTV.png',
          x: 2,
          y: 2,
          pv: 100,
        }, {
          name: 'Drago',
          avatar: 'https://img.lght.pics/235X.png',
          houseBanner: 'https://img.lght.pics/2mTc.png',
          x: 2,
          y: 6,
          pv: 100,
        }
      ],
      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },

      countDownTour: 30,
    }
    setInterval(() => {
      if (this.state.countDownTour === 0) {
        this.setState({
          countDownTour: 30
        })
        this.nextPlayer()
      } else
        this.setState({
          countDownTour: this.state.countDownTour - 1
        })
    }, 1000)

  }

  setWhiteZone() {
    let playersTmp = this.state.players[this.state.currentPlayer]

    const whiteZone = {
      minX: playersTmp.x - 1,
      maxX: playersTmp.x + 1,
      minY: playersTmp.y - 1,
      maxY: playersTmp.y + 1,
    }

    this.setState({
      whiteZone
    })
  }

  isWhiteZone = (x, y) => {

    if ((x >= this.state.whiteZone.minX && x <= this.state.whiteZone.maxX)
      && (y >= this.state.whiteZone.minY && y <= this.state.whiteZone.maxY)) {
      return true
    }
    else {
      return false
    }
  }

  handleAttackClick = () => {
    this.setWhiteZoneAttack();
    this.setState({
      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }
    })
  }



  nextPlayer = () => {
    console.log(this.state.turnNum)
    this.setState({
      ...this.state,
      turnNum: this.state.turnNum + 1,
      currentPlayer: (this.state.turnNum + 1) % 2,
      countDownTour: 30
    });
    this.setState({
      whiteZone: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      },

      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }

    });
  }

  handleMooveClick = () => {
    this.setWhiteZone();
    this.setState({
      whiteZoneAttack: {
        minX: -1,
        maxX: -1,
        minY: -1,
        maxY: -1,
      }
    })
  }

  setWhiteZoneAttack = () => {
    let playersTmp = this.state.players[this.state.currentPlayer]
    const whiteZoneAttack = {
      minX: playersTmp.x - 3,
      maxX: playersTmp.x + 3,
      minY: playersTmp.y - 3,
      maxY: playersTmp.y + 3,
    }
    this.setState({
      whiteZoneAttack
    })
  }

  isWhiteZoneAttack = (x, y) => {
    if ((x >= this.state.whiteZoneAttack.minX && x <= this.state.whiteZoneAttack.maxX)
      && (y >= this.state.whiteZoneAttack.minY && y <= this.state.whiteZoneAttack.maxY))
      return true
    else
      return false
  }


  playerAttacked = (index, damage) => {

    if (this.state.currentPlayer === index)
      return
    let playersTmp = this.state.players;
    playersTmp[index].pv -= damage

    if (playersTmp[index].pv < damage) {
      this.setState({
        ...this.state,
        showEndGame: true
      })
    } else {
      this.setState({
        ...this.state,
        players: playersTmp,

      });
      this.setState({
        whiteZoneAttack: {
          minX: -1,
          maxX: -1,
          minY: -1,
          maxY: -1,
        }
      })
    }
  }

  setPlayerPostion = (x, y) => {
    let playersTmp = this.state.players;
    playersTmp[this.state.currentPlayer].x = x
    playersTmp[this.state.currentPlayer].y = y
    this.setState({
      ...this.state,
      players: playersTmp
    })
  }
  createGrid(gridrow, gridcol) {
    let arr = []
    for (let i = 0; i < gridrow; i++) {
      for (let j = 0; j < gridcol; j++) {
        arr.push(<Cell key={"key " + i + " " + j} y={j} x={i} setPlayerPostion={this.setPlayerPostion} isMovable={this.isWhiteZone(i, j)} isAttackable={this.isWhiteZoneAttack(i, j)} />)
      }
    }
    console.log(arr)
    return arr
  }
  render() {

    if (this.state.showEndGame) {
      console.log("winner: ", this.state.players[this.state.currentPlayer])
      return <Redirect push to={{
        pathname: "/EndingGame",
        state: { winner: this.state.players[this.state.currentPlayer] }
      }} />
    }

    console.log(this.state)
    const { players, currentPlayer } = this.state
    return (
      <div className="Gride">

        {
          this.createGrid(3, 9)
        }

        {
          players.map((player, index) =>
            <Player index={index}
              x={player.x} y={player.y}
              avatar={player.avatar}
              pv={player.pv}
              isAttackable={this.isWhiteZoneAttack(player.x, player.y)}
              playerAttacked={this.playerAttacked} />)
        }
        
        <ButtonNextPlayer nextPlayer={this.nextPlayer} />

        <Menusplay
          pv={this.state.players[this.state.currentPlayer].pv}
          name={this.state.players[this.state.currentPlayer].name}
          avatar={this.state.players[this.state.currentPlayer].avatar} />

        <h2 style={{ color: 'white', fontWeigth: 'bold', fontSize: '40px', position: 'fixed', bottom: '233px', left: '450px' }}><span style={{ fontSize: '50px' }}>Timer :</span> {this.state.countDownTour}</h2>
        <button className="ButtonMoove" onClick={() => this.handleMooveClick()}>Move</button>
        <button className="ButtonAttack" onClick={() => this.handleAttackClick()}>
          Attack
       </button>

      </div>
    );
  }
}

export default Gride;
