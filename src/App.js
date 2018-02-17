import React, { Component } from 'react';
import './App.css';
import PhoneInput from './PhoneInput';
import Response from './Response';


class App extends Component {
    state = {
      phoneNumber: "",
      response: ""
    };

    handleChange = event => this.setState({ phoneNumber: event.target.value });




    departure = () => {

      var data = {phoneNumber: this.state.phoneNumber};
      var request = new Request('https://form-post-jvxdvsiaze.now.sh', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {'Content-Type': 'application/json'}
      });

      fetch(request).then(response => response.json()).then(myJson => this.setState({ response: JSON.stringify(myJson) }))
    }


    render() {
        return (
            <div className="App">
                <p>Телефон: {this.state.phoneNumber}</p>
                <p>
                    <PhoneInput onChange={this.handleChange} />
                </p>
                <button onClick={this.departure}>Отправить</button>
                <Response  response={this.state.response}/>
            </div>
        );
    }
}

export default App;
