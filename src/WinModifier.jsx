import React from 'react';

import './WinModifier.css';

const DECIMAL = 'decimal';
const PERCENTAGE = 'percentage';

class WinModifier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: PERCENTAGE,
      chanceToWin: props.chanceToWin,
      formattedChance: -1
    }
    this.formatChance = this.formatChance.bind(this);
    this.formatValue = this.formatValue.bind(this);
    this.formatAsDecimal = this.formatAsDecimal.bind(this);
    this.formatAsPercentage = this.formatAsPercentage.bind(this);
    this.updateChance = this.updateChance.bind(this);
  }

  formatChance(format) {
    switch(format) {
      case 'decimal':
        // console.log(DECIMAL);
        return this.state.chanceToWin.toFixed(3);
      case 'percentage':
        // console.log(PERCENTAGE);
        return (this.state.chanceToWin * 100).toFixed(0) + "%"
      default:
        break;
    }
  }

  formatValue(format, value) {
    switch(format) {
      case 'decimal':
        // console.log(DECIMAL);
        return value;
      case 'percentage':
        // console.log(PERCENTAGE);
        return (value * 100).toFixed(0) + "%"
      default:
        break;
    }
  }

  formatAsDecimal() {
    // console.log("Formatting as decimal");
    this.setState({
      format: DECIMAL,
      formattedChance : this.state.chanceToWin
    });
  }

  formatAsPercentage() {
    // console.log("Formatting as percentage");
    this.setState({
      format: PERCENTAGE,
      formattedChance : this.state.chanceToWin * 100 + "%"
    });
  }

  updateChance(event) {
    this.setState({
      chanceToWin: event.target.value,
      formattedChance: this.formatValue(this.state.format, event.target.value)
    })
  }

  componentDidMount() {
    // console.log("Formatting chance");
    // console.log(this.state.format);
    this.setState({
      formattedChance: this.formatChance(this.state.format)
    });
  }

  render() {
    console.log("render WinModifier");
    return (
      <div className="WinModifier">
        <h3>Your chance to win:</h3>
        <p className="winChance">{this.state.formattedChance}</p>

        <div className="rangeSlider">
          <input 
            className="slider" 
            type="range" 
            min="0.0" max="1.00" 
            // value={this.state.chanceToWin * 100}
            value = {this.state.chanceToWin}
            onChange={this.updateChance} 
            step="0.01"
            /> 
        </div>

        <p>Format as...</p>
        <button onClick={this.formatAsDecimal}>decimal <br></br>(0.10)</button>
        <button onClick={this.formatAsPercentage}>percent <br></br>(10%)</button>
      </div>
    );
  }
}

export default WinModifier;