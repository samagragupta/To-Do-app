import React, { Component } from 'react';
import './Box.css';
// import Todolist from './Todolist';

class Box extends Component {

    render () {
        return (
            <div className="boxbody">
                <div className="list">
                    {/* <Todolist />
                    <Todolist {...this.props} />
                    <Todolist {...this.props} />
                    {/* <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist /> */}
                    {this.props.createTodo}
                </div>
            </div>
        );
    }
}

export default Box;