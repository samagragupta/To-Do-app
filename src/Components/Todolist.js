import React, { Component } from 'react';
import './Todolist.css';
import Bin from './rubbish-bin.png'

class Todolist extends Component {
    render () {
        return (
            <div className="todolist">
                <img src={Bin} className="bin" alt="Bin" />
                <div className="task">
                    Samagra
                </div>
            </div>
        );
    }
}

export default Todolist;