// Cell.jsx
import React, { Component } from 'react';
import './Cell.css';



class Cell extends Component {

    
  
  setClickPosition() {
    if (this.props.isMovable) {
    this.props.setPlayerPostion(this.props.x, this.props.y)
  }
  }


  render() {

    let color="rgba(0, 0, 0, 0.4)"
    if(this.props.isMovable) color = "rgba(10, 126, 49, 0.72)"
    else if(this.props.isAttackable) color = "rgba(174, 0, 1, 0.72)"

    return (
      <div className="Cell CellClick"

        onClick={() => this.setClickPosition()}
        style={{ top: this.props.x * 100, left: this.props.y * 100, backgroundColor: color}}>

      </div>
    );
  }


}


export default Cell;
