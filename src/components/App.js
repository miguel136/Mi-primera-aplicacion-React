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
            Te amo bonita, esta va por ti... :P /* En esta línea de codigo le declaro todo mi amor a mi novia :) */
           </p>
        </header>
      </div>
    );
  }
}

export default App;
