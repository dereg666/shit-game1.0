import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div>Hi Im a player</div>
        <CssMotion
          width="30"
          height="30"
          bottom="100"
          left="60"
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
