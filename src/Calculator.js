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
      result: 0,
      prevVal: '',
      currVal: '',
      operator: ''
    };
  }
  
  handleClick = (event) => {
    if(event.target.value === 'AC') {
      this.setState({
        formula: '',
        result: 0,
        prevVal: '',
        currVal: '',
        operator: ''
      })
    }
  }; 

  render() {
    let handleClick = this.handleClick;
    return (
      <div className='App'>
        <div className='fr'> 
          <Formula />
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
