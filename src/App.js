import React, { Component } from 'react';
import './App.css';
import PhoneInput from './PhoneInput';

class App extends Component {
    state = {
        phoneNumber: ''
    };

    handleChange = event => this.setState({ phoneNumber: event.target.value });

    render() {
        return (
            <div className="App">
                <p>Телефон: {this.state.phoneNumber}</p>
                <p>
                    <PhoneInput onChange={this.handleChange} />
                </p>
            </div>
        );
    }
}

export default App;
