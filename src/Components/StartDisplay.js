import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameDisplay.css';


class StartDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleSpace = this.handleSpace.bind(this);
  }
  componentWillMount() {
    window.onkeydown = this.handleSpace;
  }
  handleSpace() {
    if (event.keyCode === 32) {
      this.props.startGame();
    }
  }
  render() {
    return (
      <div className="startDisplay">
        <div className="startText"> Press Space to Start </div>
      </div>
    );
  }
}

StartDisplay.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartDisplay;
