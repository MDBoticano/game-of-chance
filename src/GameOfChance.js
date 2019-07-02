import React from 'react';
import Results from './Results';

import './GameOfChance.css';

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }
  render() {
    console.log("GOC Render");
    let expression = Math.random() > .5; // change code here
    console.log(expression); // boolean
    return (
      <div className="gameOfChance">
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        {expression ? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

export default GameOfChance;