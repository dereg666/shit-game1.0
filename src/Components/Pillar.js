import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssMotion from './CssMotion';
import './Pillar.css';

class Pillar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      animation: '',
      degree: '',
      heightStart: 0,
    };
    this.pillarGrow = this.pillarGrow.bind(this);
    this.pillarRotate = this.pillarRotate.bind(this);
    this.pillarStopRotate = this.pillarStopRotate.bind(this);
    this.pillarMoving = this.pillarMoving.bind(this);
  }
  pillarGrow() {
    this.setState({ height: 5 });
    this.setState({ heightStart: Date.now() });
    this.setState({ animation: 'pillarScale infinite 3s linear' });
  }
  pillarRotate() {
    this.setState({ height: (Date.now() - this.state.heightStart) / 5 % 600 });
    this.setState({ animation: 'pillarRotate 0.8s linear forwards' });
    this.setState({ heightFixed: true });
    console.log(this.state.height);
  }
  pillarStopRotate() {
    this.setState({ degree: '90' });
    this.setState({ animation: '' });
    console.log(this.state.height);
  }
  pillarMoving(distance) {
    // TODO
    const styleSheet = document.styleSheets[0];
    const keyid = 2;
    // keyid > 0 ? styleSheet.insertRule(keyid - 1) : null;
    const mykeyframe = `@-webkit-keyframes pillarMoveBack {
      from {
        transform-origin: bottom left;
        transform: translate(${0}px) rotate(90deg);
      }
      to {
        transform-origin: bottom left;
        transform: translate(${-distance}px) rotate(90deg);
      }
    }`;
    styleSheet.insertRule(mykeyframe, keyid);
    this.setState({ animation: 'pillarMoveBack 0.5s linear forwards' });
  }
  render() {
    return (
      <div>
        <div>Hi this is a Pillar</div>
        <CssMotion
          width="6"
          height={this.state.height.toString()}
          bottom="100"
          left="107"
          color="rgb(142, 84, 21)"
          degree={this.state.degree.toString()}
          animation={this.state.animation}
        />
      </div>
    );
  }
}

Pillar.propTypes = {
  mode: PropTypes.number.isRequired,
  leftPosition: PropTypes.number.isRequired,
};

export default Pillar;
