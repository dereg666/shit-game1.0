import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoApp.css'



class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annStyle: {
        animation: 'none',
      },
      personStyle: {},

      mode: 0,
      start: 0,
      tarStart: 0,
      tarSpan: 0,
      tarStyle: {},
    }
    this.handleSpace = this.handleSpace.bind(this);
    this.moving = this.moving.bind(this);
  }
  handleSpace(event) {
    if (event.keyCode === 32) {
      // event.preventDefault();
      if (this.state.mode === 0) {
        console.log(this.state.annStyle);
        const attr = {
          height: '5px',
          animation: 'AppScale infinite 5s linear',
        }
        const tempTime = Date.now()
        this.setState({ start: tempTime });
        this.setState({ annStyle: attr });
        this.setState({ mode: 1 });
        
      } else if (this.state.mode === 1) {
        const para = (Date.now() - this.state.start) / 10 < 500 ? (Date.now() - this.state.start) / 10 : (Date.now() - this.state.start) / 10 % 500;
        const attr = {
          height: para,
          animation: 'AppRotate 1s linear forwards',
        }
        this.setState({ annStyle: attr });
        this.setState({ mode: 2 });
        setTimeout(this.moving, 1000);
      }
    }
  }
  moving() {
    let styleSheet = document.styleSheets[0];
    const mykeyframe = `@-webkit-keyframes peopleMoving {
      from {
        transform-origin: bottom left;
        transform: translate(${0}px);
      }
      to {
        transform-origin: bottom left;
        transform: translate(${this.state.tarStart + this.state.tarSpan}px);
      }
    }`;
    styleSheet.insertRule(mykeyframe, styleSheet.cssRules.length);

    console.log(document.styleSheets);
    const styles = {
      animation: 'peopleMoving 1s linear forwards',
    }
    this.setState({ personStyle: styles });   
    console.log(this.state.personStyle);
  }
  componentWillMount() {
    window.onkeydown = this.handleSpace;
    const tarStart = parseInt(Math.random() * 350);
    const tarSpan = parseInt(Math.random() * (470 - tarStart) + 30);
    const temp = {
      width: tarSpan,
      left: (tarStart + 110),
    }
    this.setState({ tarStart: tarStart });
    this.setState({ tarSpan: tarSpan });
    this.setState({ tarStyle: temp });
  }
  render() {
    return (
      <div className="gameDisplay">
        <div > hello </div>
        <div className="pillar" style={this.state.annStyle}></div>
        <div className="base" style={this.state.baseStyle}></div>
        <div className="person" style={this.state.personStyle}></div>
        <div className="target" style={this.state.tarStyle}></div>
        <div classNmae="target" style={this.state.tempTarStyle}></div>
      </div>
    );
  }
  
}


export default TodoList;
