import React from 'react';

import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <h1>
        {
          /* change code here */
          this.props.fiftyFifty === null ? "Let's play a game"
          : this.props.fiftyFifty ? "You win!" 
          : "You lose!"
        }
        </h1>
      </div>
    )
  };
};

export default Results;