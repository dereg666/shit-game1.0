import React, { Component } from 'react';
import StartDisplay from './Components/StartDisplay';
import GameDisplay from './Components/GameDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
    };
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  startGame() {
    this.setState({ status: 1 });
  }
  newGame() {
    this.setState({ status: 0 });
  }
  render() {
    return (
      <div className="App">
        <div>
          { this.state.status === 0 ? <StartDisplay startGame={this.startGame} /> : <GameDisplay newGame={this.newGame} />}
        </div>
      </div>
    );
  }
}

export default App;
