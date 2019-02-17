import React, { Component } from 'react';
//import logo from './global/images/logo.svg';
import novios from './global/images/novios.jpg';
import './global/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={novios} className="App-logo" alt="logo" />
          <p>
            Tengo a la novia más hermosa de todas y la amo con todo mi corazón...
           </p>
        </header>
      </div>
    );
  }
}

export default App;
