
import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import Navigation from './components/navigation';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
             <Navigation/>
          </div>
      );
  }
}


export default App;
