import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopMenu from './components/TopMenu';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <h1>hello world</h1>     
      </div> 
    );
  }
}

export default App;
