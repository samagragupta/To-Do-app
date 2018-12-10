import React, { Component } from 'react';
import './Add.css'
import Addicon from './add.png';
import AddModal from './AddModal';

class Add extends Component {

    state = {
        display : false
    }

    displayModalHandler = () => {
        var displayValue = !this.state.display;
        this.setState ({
            display : displayValue
        })
    }

    render () {

        var style = {
            display: 'none',
        }

        if (this.state.display){
            style.display = 'block';
        }

        return (
            <div className="add">
                <img src={Addicon} className="addicon"  onClick={this.displayModalHandler} alt="add" />  
                <div style={style}>
                    <AddModal />
                </div>               
            </div>
        );
    }
}

export default Add;