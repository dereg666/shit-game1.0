import React from 'react';

const style = ({ width, height, bottom, left, color, degree, animation }) => {
  return {
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
    bottom: `${bottom}px`,
    left: `${left}px`,
    backgroundColor: color,
    transformOrigin: 'bottom left',
    animation: animation,
    transform: (degree ? `rotate(${degree}deg` : ''),
  };
};

export default props => <div style={style(props)} />;
