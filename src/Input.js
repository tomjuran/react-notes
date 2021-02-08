import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        output: ''
      };
     
      this.handleChange = this.handleChange.bind(this);
      this.handleChangee = this.handleChangee.bind(this);
      this.reset = this.reset.bind(this);
  
      
    }
 
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
    
    render() {
      return (
        <div>
         
          <h4>Input</h4>
  <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
  <button className='reset' onClick={this.reset}>Reset</button>
  <h4>Output</h4>
  <input value={this.state.output} onChange={this.handleChangee.bind(this)}/>
  <button className='reset' onClick={this.reset}>Reset</button>
         
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
          <h4>Controlled Output:</h4>
          <p>{this.state.output}</p>
        </div>
      );
    }
  };

  export default Input
