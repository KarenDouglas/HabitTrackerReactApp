
import React, { Component } from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Feature from './components/featurecard';
import Mobile from './components/mobile';
import Welcome from './components/welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Welcome />
        <Feature />
        <Mobile />
        <Footer />
      </div>
    );
  }
}

export default App;
