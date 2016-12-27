import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    // your code here
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.subtract = this.subtract.bind(this);

  }

  setNum1(e) {
    // your code here
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    // your code here
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  clear(e) {
    const state = {
      num1: "",
      num2: "",
      result: 0
    };
    this.setState(state);
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result});
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result});
  }




  // your code here

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>

        <label>Num1
          <input onChange={this.setNum1} value={num1}></input>
        </label>
        <label>Num2
          <input onChange={this.setNum2} value={num2}></input>
        </label>
        <button onClick={this.clear}>clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
