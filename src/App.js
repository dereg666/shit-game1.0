import React, { Component } from 'react';
import GameDisplay from './Components/GameDisplay';


class App extends Component {
  constructor() {
    super()
    
  }
  render() {
    const hello = 'hello';
    return (
      <div className="App">
        <div> app </div>
        <div>
          <GameDisplay />
        </div>
      </div>
    );
  }
}

export default App;
