import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';

class Pillar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightFixed: 0,
      degreeFixed: 0,
      leftFixed: 0,
    };
  }
  render() { 
    let height = this.state.heightFixed;
    let degree = this.state.degreeFixed;
    let left = this.state.leftFixed;
    
    if (this.state.heightFixed === 0) {
      if (this.props.mode === 1) {
        height = (Date.now() - this.props.heightStart) / 5 % 600;
      } else if (this.props.mode > 1 || this.state.heightFixed !== 0) {
        height = Date.now() - this.props.heightStart;
        this.setState({ heightFixed: height });
      }
    } else {
      height = this.state.heightFixed;
    }
    if (this.state.degreeFixed === 0) {
      if (this.props.mode === 2) {
        degree = (Date.now() - this.props.degreeStart) / 10;
      } else if (this.props.mode > 2 || this.state.degreeFixed !== 0) {
        this.setState({ degreeFixed: 90 });
        degree = '90';
      }
    } else {
      degree = this.state.degreeFixed;
    }
    if (this.state.leftFixed === 0) {
      if (this.props.mode === 4) {
        left = (Date.now() - this.props.leftStart) / 10 + 100;
      } else if (this.props.mode > 4 || this.state.leftFixed !== 0) {
        left = (Date.now() - this.props.leftStart) / 10 + 100;
        this.setState({ leftFixed: left });
      }
    } else {
      left = this.state.leftFixed;
    }
    const position = {
      left: (this.props.mode === 4 ? (Date.now() - this.props.leftStart) + 100 : 100).toFixed(),
      bottom: '100',
    };
    return (
      <div>
        <div>Hi this is a Pillar</div>
        <CssMotion
          width="10"
          height={height.toString()}
          position={position}
          degree={degree.toString()}
          color="rgb(142, 84, 21)"
        />
      </div>
    );
  }
}

Pillar.PropTypes = {
  mode: PropTypes.number.isRequired,
  heightStart: PropTypes.number.isRequired,
  degreeStart: PropTypes.number.isRequired,
  leftStart: PropTypes.number.isRequired,
};

export default Pillar;
