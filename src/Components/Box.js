import React, { Component } from 'react';
import './Box.css';
import Todolist from './Todolist';

class Box extends Component {
    render () {
        return (
            <div className="boxbody">
                <div className="list">
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                    <Todolist />
                </div>
            </div>
        );
    }
}

export default Box;