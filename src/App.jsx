//App.jsx
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';
import GameZone from './components/GameZone';
import MainMenu from './components/MainMenu';
import EndingGame from './components/EndingGame';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component = {MainMenu} />
      <Route exact path= '/GameZone' component = {GameZone} />
      <Route exact path= '/EndingGame' component = {EndingGame}/>
      </Switch>
    );
  }
}

export default App;
