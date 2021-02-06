import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      this.incrementtwo = this.incrementtwo.bind(this);
      this.decrementbyfour = this.decrementbyfour.bind(this);
  
      // Change code above this line
    }
    // Change code below this line
    reset() {
      this.setState({
        count: 0
      });
    }
      increment() {
        this.setState(state => ({
          count: state.count + 1
        }));
      }
      decrement() {
        this.setState(state => ({
           count: state.count -1
        }));
      }

      incrementtwo() {
          this.setState(state => ({
              count: state.count +2
          }));
      }
      decrementbyfour() {
          this.setState(state => ({
              count: state.count -4
          }));
      }
    
  
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <button className='inctwo' onClick={this.incrementtwo}>Increment by two</button>
          <button className='inctwo' onClick={this.decrementbyfour}>-4</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
}

export default Counter