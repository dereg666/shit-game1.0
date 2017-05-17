import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Pillar from './Pillar';
import Block from './Block';
import './GameDisplay.css';

class GameDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: -1,
      pillars: [],
      blocks: [],
      index: 0,
      minSpan: 300,
    };
    this.handleSpace = this.handleSpace.bind(this);
    this.playerMoving = this.playerMoving.bind(this);
    this.wholeMoving = this.wholeMoving.bind(this);
    this.addElement = this.addElement.bind(this);
    this.resetNew = this.resetNew.bind(this);
  }
  componentWillMount() {
    window.onkeydown = this.handleSpace;
    const tempPillar = [];
    const newPillar = {
      leftPosition: 0,
    };
    tempPillar.push(newPillar);
    const tempBlock = [];
    tempBlock.push({
      width: 110,
      leftPosition: 0,
    });
    const tempWidth = Math.random() * 250 + this.state.minSpan;
    tempBlock.push({
      width: tempWidth,
      leftPosition: Math.random() * (550 - tempWidth) + 160,
    });
    this.setState({ pillars: tempPillar });
    this.setState({ blocks: tempBlock });
    this.setState({ mode: 0 });
  }
  handleSpace(event) {
    if (event.keyCode === 32) {
      // event.preventDefault();
      if (this.state.mode === 0) {
        this.setState({ mode: 1 });
        this[`childP${this.state.index}`].pillarGrow();
      } else if (this.state.mode === 1) {
        this.setState({ mode: 2 });
        this[`childP${this.state.index}`].pillarRotate();
        setTimeout(this.playerMoving, 800);
      }
    }
  }
  playerMoving() {
    this[`childP${this.state.index}`].pillarStopRotate();
    this.childPlayer.playerMoveForward(this.state.blocks[this.state.index + 1].leftPosition + this.state.blocks[this.state.index + 1].width - 110);
    this.setState({ mode: 3 });
    this.addElement();
    setTimeout(this.wholeMoving, 1400);
  }
  addElement() {
    const tempBlock = this.state.blocks;
    const tempSpan = this.state.minSpan * 0.9;
    const tempWidth = Math.random() * (550 - tempSpan) + tempSpan;
    tempBlock.push({
      width: tempWidth,
      // leftPosition: Math.random() * (550 - tempWidth) + 160,
      leftPosition: 2000,
    });
    const tempPillar = this.state.pillars;
    tempPillar.push({
      leftPosition: 0,
    });
    this.setState({ blocks: tempBlock });
    this.setState({ pillars: tempPillar });
  }
  wholeMoving() {
    const dis = this.state.blocks[this.state.index + 1].leftPosition + this.state.blocks[this.state.index + 1].width - 110;
    this.childPlayer.playerMoveBackward(dis);
    this[`childP${this.state.index}`].pillarMoving(dis);
    this[`childB${this.state.index}`].blockMove(dis, 3);
    this[`childB${this.state.index + 1}`].blockMove(dis, -1);
    this[`childB${this.state.index + 2}`].blockShowMove();
    this.setState({ mode: 4 });
    setTimeout(this.resetNew, 500);
  }
  resetNew() {
    const tempBlock = this.state.blocks;
    const tempPillar = this.state.pillars;
    const index = this.state.index;
    delete tempBlock[index];
    if (index > 0) {
      delete tempPillar[index - 1];
    }
    this.setState({ index: index + 1 });
    this.setState({ mode: 0 });
  }
  render() {
    return (
      <div className="gameDisplay">
        <div>hello world</div>
        <Player
          ref={(instance) => { this.childPlayer = instance; }}
        />
        <div>
          {this.state.blocks.map((bl, id) => <Block
            ref={(instance) => { this[`childB${id}`] = instance; }}
            mode={this.state.mode}
            width={bl.width}
            leftPosition={bl.leftPosition}
          />)}
        </div>
        <div>
          {this.state.pillars.map((pl, id) => <Pillar
            ref={(instance) => { this[`childP${id}`] = instance; }}
            mode={this.state.mode}
            leftPosition={pl.leftPosition}
          />)}
        </div>
      </div>
    );
  }
}

export default GameDisplay;
