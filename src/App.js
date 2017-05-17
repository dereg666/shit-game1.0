import React, { Component } from 'react';
import GameDisplay from './Components/GameDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
    };
    this.newGame = this.newGame.bind(this);
  }
  newGame() {

  }
  render() {
    return (
      <div className="App">
        <div>
          <GameDisplay
            newGame={this.newGame}
          />
        </div>
      </div>
    );
  }
}

export default App;
