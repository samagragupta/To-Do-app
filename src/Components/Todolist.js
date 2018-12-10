import React, { Component } from 'react';
import './Todolist.css';
import Bin from './rubbish-bin.png'

class Todolist extends Component {
    render () {
        return (
            <div className="todolist">
                <img src={Bin} className="bin" alt="Bin" />
                Samagra
            </div>
        );
    }
}

export default Todolist;