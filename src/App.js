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
        datevalue: '',
        itemArray: [],
        display : false,
        checkValues: '',
        tickValue1: false,
        tickValue2: false,
        tickValue3: false,
    }
}

  onAddTask = () => {
    var displayValue = !this.state.display;
    this.setState({
      itemArray: [...this.state.itemArray, {value: this.state.inputValue, datetime: this.state.datevalue, checkvalue: this.state.checkValues}],
      display : displayValue,
      inputValue : '',
      datevalue: '',
      tickValue1: false,
      tickValue3: false,
      tickValue2: false,
    })
  }

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }
  
  updateDateValue = (event) => {
    this.setState({
      datevalue: event.target.value
    });
  }

  displayModalHandler = () => {
    var displayValue = !this.state.display;
    this.setState ({
        display : displayValue
    })
  }

  // tickvalue = 'low';

  updateCheck = (event) => {
    this.setState({
      checkValues: event.target.value,
    });
    console.log(event.target.value)
    // tickvalue = event.target.value;
    if(event.target.value === 'low'){
      this.setState({
        tickValue1: true,
        tickValue2: false,
        tickValue3: false,
      });
    }
    if(event.target.value === 'medium'){
      this.setState({
        tickValue2: true,
        tickValue1: false,
        tickValue3: false,
      });
    }
    if(event.target.value === 'high'){
      this.setState({
        tickValue1: false,
        tickValue2: false,
        tickValue3: true,
      });
    }

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
                  <Todolist tasks = {itemArr.value} date = {itemArr.datetime} priority = {itemArr.checkvalue}/>
                </div>
              )
            })}
          </div>
          }>
        </Box>
        <Add addTask = {this.onAddTask} inputValues = {this.updateInputValue} inputDeadlines = {this.updateDateValue}
          inputDeadline = {this.state.datevalue} checkOnChange = {this.updateCheck} tick1 = {this.state.tickValue1}
          tick2 = {this.state.tickValue2} tick3 = {this.state.tickValue3} 
         inputV = {this.state.inputValue} displayStyle = {style} displayn = {this.displayModalHandler} />
      </div>
    );
  }
}

export default App;
