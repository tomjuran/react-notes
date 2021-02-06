import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '',
          submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      handleSubmit(event) {
        event.preventDefault()
        this.setState({
          submit: this.state.input
        });
      }
      reset() {
        this.setState({
          input: '',
          submit: ''
        });
      }
      render() {
        return (
          <div>
              <h1>type and submit</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.input}
                onChange={this.handleChange} />
              <button type='submit'>Submit!</button>
              <button className='reset' onClick={this.reset}>Reset</button>
            </form>
            <h1>{this.state.submit}</h1>
          </div>
        );
      }
    };

  export default Form