import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box';
import Add from './Components/Add';
import Todolist from './Components/Todolist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        lists: '',
        inputValue: '',
        itemArray: []
    }
}

  onAddTask = () => {
    this.setState({
      itemArray: [...this.state.itemArray, this.state.inputValue]
    })
  }

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    return (
      <div className="App">
        <Box createTodo = {
          <div>
            {this.state.itemArray.map((itemArr) => {
              return (
                <div className="box">
                  <Todolist tasks = {itemArr} />
                </div>
              )
            })}
          </div>
          }>
        </Box>
        <Add addTask = {this.onAddTask} inputValues = {this.updateInputValue} inputV = {this.state.inputValue}  />
      </div>
    );
  }
}

export default App;
