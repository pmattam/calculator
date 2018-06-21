import React, { Component } from 'react';
import './App.css';
import Formula from './Formula';
import Result from './Result';
import Buttons from './Buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      result: 0
    };
  }
  
  handleClick = (event) => {
    if(event.target.value === 'AC') {
      this.setState({
        formula: '',
        result: 0
      });
    } else if(event.target.value !== '=') {
      this.setState({
        formula: this.state.formula + event.target.value
      });
    } else if(event.target.value === '=') {
      let endResult = eval(this.state.formula);
      let formulaAndEndResult = this.state.formula + '=' + endResult;
      this.setState({
        formula: formulaAndEndResult,
        result: endResult
      });
    }
  }; 

  render() {
    let handleClick = this.handleClick;
    let formula = this.state.formula;
    return (
      <div className='App'>
        <div className='fr'> 
          <Formula 
          formula = {formula}
          />
          <Result 
            result={this.state.result}
          />
        </div> 
        <div className='bt'>
          <Buttons 
          handleClick={handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
