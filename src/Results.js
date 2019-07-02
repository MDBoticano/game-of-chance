import React from 'react';

import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiftyFifty: this.props.fiftyFifty
    }
  }


  componentDidMount() {
    console.log("Results: " + (this.state.fiftyFifty));
  }


  render() {
    return (
      <div className="results">
        <h1>
        {
          /* change code here */
          // this.props.fiftyFifty
          this.props.fiftyFifty ? "You win!" : "You lose!"
        }
        </h1>
      </div>
    )
  };
};

export default Results;