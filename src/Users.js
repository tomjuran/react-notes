import React, { Component } from 'react'

class Users extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 127
        });
      }, 2500);
    }
    render() {
      return (
        <div>
    
          <h1>Active Users: {this.state.activeUsers}</h1>
     
        </div>
      );
    }
  }

  export default Users
