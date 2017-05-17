import React, { Component } from 'react';
import StartDisplay from './Components/StartDisplay';
import GameDisplay from './Components/GameDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      games: [],
    };
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  startGame() {
    this.setState({ status: 1 });
    const tempGame = this.state.games;
    const tempNew = {
      index: tempGame.length,
    };
    tempGame.push(tempNew);
    this.setState({ games: tempGame });
  }
  newGame() {
    this.setState({ status: 0 });
    const tempGame = this.state.games;
    delete tempGame[tempGame.length - 1];
    this.setState({ games: tempGame });
  }
  render() {
    return (
      <div className="App">
        <div>
          { this.state.status === 0 ? <StartDisplay startGame={this.startGame} /> : <div>
            {this.state.games.map(pl => <GameDisplay newGame={this.newGame} index={pl.index} />)}
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
