import React, { Component } from 'react';
import StartDisplay from './Components/StartDisplay';
import GameDisplay from './Components/GameDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      games: [],
      leaderBoard: [],
    };
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    this.update();
  }
  update() {
    fetch('/api/loading')
      .then(response => response.json())
      .then((data) => {
        this.setState({ leaderBoard: data });
      }).catch((error) => {
        console.log('request failed', error);
      });
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
  newGame(score, name) {
    this.setState({ status: 0 });
    const tempGame = this.state.games;
    if (name.length > 0) {
      const temp = {
        Score: score,
        Name: name,
      };
      fetch('/api/posting', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(temp),
      }).then((res) => {
        if (res.status === 200) {
          this.update();
        }
      }).catch((err) => {
        console.err(err);
        this.update();
      });
    }
    delete tempGame[tempGame.length - 1];
    this.setState({ games: tempGame });
  }
  render() {
    return (
      <div className="App">
        <div>
          { this.state.status === 0 ? <StartDisplay startGame={this.startGame} leaders={this.state.leaderBoard} /> : <div>
            {this.state.games.map(pl => <GameDisplay newGame={this.newGame} index={pl.index} />)}
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
