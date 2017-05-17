import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
      leftPosition: 70,
    };
    this.playerMoveForward = this.playerMoveForward.bind(this);
    this.playerMoveBackward = this.playerMoveBackward.bind(this);
    this.playerFall = this.playerFall.bind(this);
  }
  playerMoveForward(distance) {
    const styleSheet = document.styleSheets[0];
    const keyid = 0;
    // keyid > 0 ? styleSheet.insertRule(keyid - 1) : null;
    // console.log('player move: ', distance);
    const mykeyframe = `@-webkit-keyframes peopleMoving${keyid} {
      from {
        transform-origin: bottom left;
        transform: translate(${0}px);
      }
      to {
        transform-origin: bottom left;
        transform: translate(${distance}px);
      }
    }`;
    styleSheet.insertRule(mykeyframe, keyid);
    this.setState({ animation: `peopleMoving${keyid} 1.4s linear forwards` });
  }
  playerMoveBackward(distance) {
    const styleSheet = document.styleSheets[0];
    const keyid = 1;
    const mykeyframe = `@-webkit-keyframes peopleMoving${keyid} {
      from {
        transform-origin: bottom left;
        transform: translate(${distance}px);
      }
      to {
        transform-origin: bottom left;
        transform: translate(${0}px);
      }
    }`;
    styleSheet.insertRule(mykeyframe, keyid);
    this.setState({ animation: `peopleMoving${keyid} 0.5s linear forwards` });
    // styleSheet.deleteRule(keyid - 1);
  }
  playerFall(dis) {
    this.setState({ leftPosition: this.state.leftPosition + dis });
    this.setState({ animation: '' });
    const styleSheet = document.styleSheets[0];
    const keyid = 1;
    const mykeyframe = `@-webkit-keyframes peopleMoving${keyid} {
      from {
        transform-origin: bottom left;
        transform: translateY(${0}px);
      }
      to {
        transform-origin: bottom left;
        transform: translateY(${140}px);
      }
    }`;
    styleSheet.insertRule(mykeyframe, keyid);
    this.setState({ animation: `peopleMoving${keyid} 0.5s linear forwards` });
  }
  render() {
    return (
      <div>
        <CssMotion
          width="30"
          height="30"
          bottom="100"
          left={this.state.leftPosition.toString()}
          color="rgb(255, 26, 26)"
          degree=""
          animation={this.state.animation}
        />
      </div>
    );
  }
}

Player.PropTypes = {
  mode: PropTypes.number.isRequired,
  leftStart: PropTypes.number.isRequired,
};

export default Player;
