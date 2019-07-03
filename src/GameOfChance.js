import React from 'react';

import Results from './Results';
import WinModifier from './WinModifier';

import './GameOfChance.css';

/* Goals */
/* 
 * 1) Slider to modify win chance (chanceToWin)
 * 2) Reset button
 * 3) More statistics 
 */


/* Modify this if you want to change win change: between 0 - 1.0  */
const chanceToWin = 0.75;

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "Click me!",
      expression: null,
      counter: 0,
      chanceToWin: chanceToWin,
      wins: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.newBool = this.newBool.bind(this);
  }

  handleClick() {
    // console.log("Click handling...");
    let expression = this.newBool();

    // You've heard of ternary, what about unary?
    // "(+ expression)"" converts the boolean "expression"" into int via unary
    this.setState({
      playState: 'Play again!',
      expression: expression,
      counter: this.state.counter + 1,
      wins: this.state.wins + (+ expression)
    });
  }

  newBool() {
    let newBool = Math.random() > (1 - this.state.chanceToWin);
    // console.log("newBool: " + newBool);
    return newBool;
  }

  render() {
    // console.log("Game rendered");
    return (
      <div className="gameOfChance">
        <Results fiftyFifty={this.state.expression} />
        <button className="playButton" onClick={this.handleClick}>{this.state.playState}</button>
        <p>{'Turn: ' + this.state.counter}</p>
        <p>Wins: {this.state.wins}</p>
        <p>Losses: {this.state.counter - this.state.wins}</p>
        <p>W/L Ratio: {(this.state.wins / this.state.counter).toFixed(3) }</p>
        <WinModifier chanceToWin={this.state.chanceToWin} />
      </div>
    );
  }
};

export default GameOfChance;