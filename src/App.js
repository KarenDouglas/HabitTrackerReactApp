
import React, { Component } from 'react';
import Navigation from './components/navigation';
import SignUpForm from './components/signup';
import './App.css';
import LoginForm from './components/login';

class App extends Component {
  render() {
      return (
          <div className="App">
             <Navigation/>
             <SignUpForm/>
             <LoginForm/>
          </div>
      );
  }
}


export default App;
