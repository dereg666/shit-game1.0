import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const left = (this.props.mode === 3 ? (Date.now() - this.props.leftStart) + 60 : 60).toFixed();    
    return (
      <div>
        <div>Hi Im a player</div>
        <CssMotion
          width="30"
          height="30"
          bottom="100"
          left={left}
          degree="0"
          color="rgb(255, 0, 0)"
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
