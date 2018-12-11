import React, { Component } from 'react';
import './Box.css';
import Todolist from './Todolist';

class Box extends Component {

    constructor(props) {
        super();
        this.state = {
            lists: 'Hi',
        }
    }

    render () {
        return (
            <div className="boxbody">
                <div className="list">
                    <Todolist />
                    <Todolist {...this.props} />
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