import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box';
import Add from './Components/Add';
import Todolist from './Components/Todolist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        lists: 'Hi',
        inputValue: 'hey',
        itemArray: []
    }
}

  onAddTask = () => {
    this.setState ({
        list: this.state.inputValue
    });
    const item = this.state.itemArray;
    const title = '';
    const text = '';
    item.push({ title, text })
    this.setState({itemArray: item})
}

updateInputValue = (event) => {
  this.setState({
    inputValue: event.target.value
  });
}

createProject() {
  const item = this.state.itemArray;
  const title = '';
  const text = '';
  item.push({ title, text })
  this.setState({itemArray: item})
}

  render() {
    return (
      <div className="App">
        <Box createTodo = {
          <div>
            {this.state.itemArray.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <Todolist tasks = {this.state.list} />
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
