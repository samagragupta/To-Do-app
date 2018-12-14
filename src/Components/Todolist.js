import React, { Component } from 'react';
import './Todolist.css';
import Bin from './rubbish-bin.png'

class Todolist extends Component {

    constructor(props){
        super(props);
        this.state = {
            display : false,
        }
    }

    displayModalHandler = () => {
        var displayValue = !this.state.display;
        this.setState ({
            display : displayValue
        })
      }

    render () {

        var style = {
            display: 'block',
          }
      
          if (this.state.display){
              style.display = 'none';
          }

        return (
            <div className="todolist" style={style}>
                <img src={Bin} className="bin" alt="Bin" onClick={this.displayModalHandler} />
                <div className="task">
                    {this.props.tasks}
                </div>
            </div>
        );
    }
}

export default Todolist;