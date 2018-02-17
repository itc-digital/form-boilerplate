import React, { Component } from 'react';

class Response extends Component {
  render(){
    return (
      <div>
        <p>Результат: {this.props.response}</p>
      </div>
    )
  }
}

export default Response;
