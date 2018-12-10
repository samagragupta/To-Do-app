import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box';
import Add from './Components/Add';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box />
        <Add />
      </div>
    );
  }
}

export default App;
