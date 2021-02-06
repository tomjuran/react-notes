import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        output: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this);
      this.handleChangee = this.handleChangee.bind(this);
      this.reset = this.reset.bind(this);
  
      // Change code above this line
    }
    // Change code below this line
    reset() {
        this.setState({
          input: '',
          output: ''
        });
      }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleChangee(event) {
    this.setState({
      output: event.target.value
    });
  }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <h4>Input</h4>
  <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
  <button className='reset' onClick={this.reset}>Reset</button>
  <h4>Output</h4>
  <input value={this.state.output} onChange={this.handleChangee.bind(this)}/>
  <button className='reset' onClick={this.reset}>Reset</button>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
          <h4>Controlled Output:</h4>
          <p>{this.state.output}</p>
        </div>
      );
    }
  };

  export default Input