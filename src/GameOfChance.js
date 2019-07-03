import React from 'react';
import Results from './Results';

import './GameOfChance.css';

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "Click me!",
      expression: null,
      counter: 0,
      wins: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.newBool = this.newBool.bind(this);
    this.updateWins = this.updateWins.bind(this);
  }

  handleClick() {
    // console.log("Click handling...");
    let expression = this.newBool();

    // You've heard of ternary, what about unary?
    // "(+ expression)"" converts boolean into int using unary
    this.setState({
      playState: 'Play again!',
      expression: expression,
      counter: this.state.counter + 1,
      wins: this.state.wins + (+ expression)
    });
  }

  updateWins(bool) {
    if(bool) {
      this.setState({
        wins: this.state.wins + 1
      })
    }
  }

  newBool() {
    let newBool = Math.random() > .5;
    // console.log("newBool: " + newBool);
    return newBool;
  }

  render() {
    console.log("Game rendered");
    // let expression = Math.random() > .5; // change code here
    // console.log(expression); // boolean
    
    
    // let expression = this.newBool();

    return (
      <div className="gameOfChance">
        <button onClick={this.handleClick}>{this.state.playState}</button>
        { /* change code below this line */ }
        <Results fiftyFifty={this.state.expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
        <p>Wins: {this.state.wins}</p>
        <p>Losses: {this.state.counter - this.state.wins}</p>
        <p>W/L Ratio: {(this.state.wins / this.state.counter).toFixed(3) }</p>
      </div>
    );
  }
};

export default GameOfChance;