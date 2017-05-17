import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameDisplay.css';


class LeaderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item">
        <span className="leadRank">{this.props.rank}</span>
        <span className="leadName">{this.props.name}</span>
        <span className="leadScore">{this.props.score}</span>
      </div>
    );
  }
}

LeaderItem.propTypes = {
  rank: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default LeaderItem;
