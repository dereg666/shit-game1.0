import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeaderItem from './LeaderItem';
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
        <div className="leadTitle">Leader Board</div>
        <div className="item">
          <span className="leadRank">Rank</span>
          <span className="leadName">Name</span>
          <span className="leadScore itemHead">Score</span>
        </div>
        <div>
          {this.props.leaders.map((ld, id) => <LeaderItem
            rank={id + 1}
            score={ld.Score}
            name={ld.Name}
          />)}
        </div>
      </div>
    );
  }
}

StartDisplay.propTypes = {
  startGame: PropTypes.func.isRequired,
  leaders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StartDisplay;
