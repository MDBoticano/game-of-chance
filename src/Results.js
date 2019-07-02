import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
        this.props.fiftyFifty
      }
      </h1>
    )
  };
};

export default Results;