import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box';
import Add from './Components/Add';
import Todolist from './Components/Todolist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        inputValue: '',
        itemArray: [],
        display : false,
    }
}

  onAddTask = () => {
    var displayValue = !this.state.display;
    this.setState({
      itemArray: [...this.state.itemArray, this.state.inputValue],
      display : displayValue
    })
  }

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  displayModalHandler = () => {
    var displayValue = !this.state.display;
    this.setState ({
        display : displayValue
    })
  }

  render() {

    var style = {
      display: 'none',
    }

    if (this.state.display){
        style.display = 'block';
    }

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
        <Add addTask = {this.onAddTask} inputValues = {this.updateInputValue}
         inputV = {this.state.inputValue} displayStyle = {style} displayn = {this.displayModalHandler} />
      </div>
    );
  }
}

export default App;
