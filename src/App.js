import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box';
import Add from './Components/Add';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        lists: 'Hi',
        inputValue: 'hey'
    }
}

  onAddTask = () => {
    this.setState ({
        list: this.state.inputValue
    });
}

updateInputValue = (event) => {
  this.setState({
    inputValue: event.target.value
  });
}

  render() {
    return (
      <div className="App">
        <Box tasks = {this.state.list} />
        <Add addTask = {this.onAddTask} inputValues = {this.updateInputValue} inputV = {this.state.inputValue}  />
      </div>
    );
  }
}

export default App;
