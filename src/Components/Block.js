import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';
import './Block.css';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPosition: 0,
      animation: '',
    };
    this.blockMove = this.blockMove.bind(this);
    this.blockShowMove = this.blockShowMove.bind(this);
    this.blockShowInit = this.blockShowInit.bind(this);
  }
  componentWillMount() {
    this.setState({ leftPosition: this.props.leftPosition });
  }
  blockMove(distance, keyid) {
    const styleSheet = document.styleSheets[0];
    if (keyid >= 0) {
      // keyid > 0 ? styleSheet.insertRule(keyid - 1) : null;
      const mykeyframe = `@-webkit-keyframes blockMoveBack {
        from {
          transform-origin: bottom left;
          transform: translate(${0}px);
        }
        to {
          transform-origin: bottom left;
          transform: translate(${-distance}px);
        }
      }`;
      styleSheet.insertRule(mykeyframe, keyid);
    }
    this.setState({ animation: 'blockMoveBack 0.5s linear forwards' });
  }
  blockShowMove() {
    const styleSheet = document.styleSheets[0];
    const keyid = 4;
    // keyid > 0 ? styleSheet.insertRule(keyid - 1) : null;
    const leftP = Math.random() * (550 - this.props.width) + 160;
    const mykeyframe = `@-webkit-keyframes blockShowMoveBack {
      from {
        transform-origin: bottom left;
        transform: translate(${0}px);
      }
      to {
        transform-origin: bottom left;
        transform: translate(${leftP - 2000}px);
      }
    }`;
    styleSheet.insertRule(mykeyframe, keyid);
    console.log(leftP);
    setTimeout(() => this.blockShowInit(leftP), 500);
    this.setState({ animation: 'blockShowMoveBack 0.5s linear' });
  }
  blockShowInit(leftP) {
    this.setState({ leftPosition: leftP });
    this.setState({ animation: '' });
  }
  render() {
    console.log('left: ', this.state.leftPosition);
    return (
      <div>
        <div>Hi Im a player</div>
        <CssMotion
          width={this.props.width.toString()}
          height="100"
          bottom="0"
          left={this.state.leftPosition.toString()}
          color="rgb(0, 0, 0)"
          degree=""
          animation={this.state.animation}
        />
      </div>
    );
  }
}

Block.propTypes = {
  // mode: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  leftPosition: PropTypes.number.isRequired,
};

export default Block;
