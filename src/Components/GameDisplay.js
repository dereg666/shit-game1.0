import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Pillar from './Pillar';
import './GameDisplay.css';

class GameDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: -1,
      pillars: [],
      blocks: [],
      index: 0,
      player: {
        leftStart: 0,
      },
    };
    this.handleSpace = this.handleSpace.bind(this);
    this.playerMoving = this.playerMoving.bind(this);
    this.wholeMoving = this.wholeMoving.bind(this);
  }
  componentWillMount() {
    window.onkeydown = this.handleSpace;
    const tempPillar = [];
    const newPillar = {
      leftPostion: 0,
    };
    tempPillar.push(newPillar);
    this.setState({ pillars: tempPillar });
    this.setState({ mode: 0 });
  }
  handleSpace(event) {
    if (event.keyCode === 32) {
      // event.preventDefault();
      if (this.state.mode === 0) {
        this.setState({ mode: 1 });
        this[`child${this.state.index}`].pillarGrow();
      } else if (this.state.mode === 1) {
        this.setState({ mode: 2 });
        this[`child${this.state.index}`].pillarRotate();
        setTimeout(this.playerMoving, 1000);
      }
    }
  }
  playerMoving() {
    const tempPlayer = this.state.player;
    tempPlayer.leftStart = Date.now();
    this[`child${this.state.index}`].pillarStopRotate();
    this.setState({ mode: 3 });
    this.setState({ player: tempPlayer });
    setTimeout(this.wholeMoving, 1000);
  }
  wholeMoving() {
    this.setState({ mode: 4 });
  }
  render() {
    return (
      <div className="gameDisplay">
        <div>hello world</div>
        <div>
          {this.state.pillars.map((pl, id) => <Pillar
            ref={(instance) => { this[`child${id}`] = instance; }}
            mode={this.state.mode}
            leftPostion={pl.leftPostion}
          />)}
        </div>
      </div>
    );
  }
}

export default GameDisplay;
