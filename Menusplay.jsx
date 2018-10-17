// Menusplay.jsx
import React, { Component } from 'react';
import './Menusplay.css';
import HealthBar from './HealthBar.js';


class Menusplay extends Component {
  render() {
    return(
      <div className="Menusplay">
      <h1>Menus à venir</h1>
      < HealthBar pvs={100}/> 
      </div>
    );

  }


  }


export default Menusplay;
