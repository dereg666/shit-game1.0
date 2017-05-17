import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
    };
    this.blockMove = this.blockMove.bind(this);
    this.blockShowMove = this.blockShowMove.bind(this);
    this.blockReset = this.blockReset.bind(this);
  }
  blockMove(distance, keyid) {
    const styleSheet = document.styleSheets[0];
    // console.log('block move', distance);
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
  blockShowMove(leftP) {
    const styleSheet = document.styleSheets[0];
    const keyid = 4;
    // keyid > 0 ? styleSheet.insertRule(keyid - 1) : null;
    // const leftP = Math.random() * (550 - this.props.width) + 160;
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
    // console.log(leftP);
    this.setState({ animation: 'blockShowMoveBack 0.5s linear forwards' });
  }
  blockReset() {
    // this.setState({ leftPosition: leftP });
    this.setState({ animation: '' });
  }
  render() {
    // <div>Hi Im a Block, leftPosition: {this.props.leftPosition}, width: {this.props.width}, move: {this.props.leftPosition + this.props.width - 110}</div>
    return (
      <div>
        <CssMotion
          width={this.props.width.toString()}
          height="100"
          bottom="0"
          left={this.props.leftPosition.toString()}
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
