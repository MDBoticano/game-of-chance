import React, { Component } from 'react';
import Results from './Results';

class GameOfChance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      wins: 0,
      loses: 0,
      expression: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateWins = this.updateWins.bind(this);
    this.whenWins = this.whenWins.bind(this);
    this.updateLoses = this.updateLoses.bind(this);
    this.whenLoses = this.whenLoses.bind(this);
  }
  handleClick() {
    let expression = Math.random() > .5;
    this.setState({
      expression: expression,
      counter: this.state.counter + 1// change code here
    });
  }
  updateWins() {
    this.setState({
      wins: this.state.wins + 1
    })
  }

  updateLoses() {
    this.setState({
      loses: this.state.loses + 1
    })
  }
  
  whenWins(){
    this.updateWins();
    return <Results fiftyFifty="You Win!"/>;
  }

  whenLoses() {
    this.updateLoses();
    return <Results fiftyFifty = "You Lose!"/>;
  }
  
  render() {
    let expression = this.state.expression; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        {(expression === 1) ? this.whenWins : this.whenLoses }
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
        <p>{'Wins: ' + this.state.wins}</p>
      </div>
    );
  }
};

export default GameOfChance;