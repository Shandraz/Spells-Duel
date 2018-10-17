// Menusplay.jsx
import React, { Component } from 'react';
import './Menusplay.css';
import HealthHeart from './HealthHeart';


class Menusplay extends Component {
  constructor(props){
    super(props)
    this.state={

    };

  }
  render() {
    return(
      <div className="Menusplay">
      <h1>{this.props.name}</h1>
      <HealthHeart pv = {this.props.pv}/>
      </div>
    );

  }


  }


export default Menusplay;
