import React from 'react';

import './Results.css';

class Results extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="results">
        <h1>
        {
          /* change code here */
          (this.props.fiftyFifty)
        }
        </h1>
      </div>
    )
  };
};

export default Results;