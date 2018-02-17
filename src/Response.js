import React, { Component } from 'react';

class Response extends Component {
  render(){
    return (
      <div>
        <p>Props: {this.props.response}</p>
      </div>
    )
  }
}

export default Response;
