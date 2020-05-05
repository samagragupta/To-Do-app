import React, { Component } from 'react';
import './Todolist.css';
import Bin from './rubbish-bin.png'

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            strikes: false,
        }
    }

    displayModalHandler = () => {
        var displayValue = !this.state.display;
        this.setState({
            display: displayValue
        })
    }

    strike = () => {
        var strikeValue = !this.state.strikes;
        this.setState({
            strikes: strikeValue
        })
    }



    render() {

        var style = {
            display: 'block',
        }

        var line = {
            textDecoration: 'none',
        }

        if (this.state.display) {
            style.display = 'none';
        }

        if (this.state.strikes) {
            line.textDecoration = 'line-through';
        }

        return (
            <div className="todolist" style={style}>
                <img src={Bin} className="bin" alt="Bin" onClick={this.displayModalHandler} />
                <div className="task" style={line} onClick={this.strike}>
                    {this.props.tasks}
                    <span className="date">
                        {this.props.date}
                    </span>
                    <span className="priority">
                        {this.props.priority}
                    </span>
                </div>
            </div>
        );
    }
}

export default Todolist;