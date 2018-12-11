import React, { Component } from 'react';
import './Add.css'
import Addicon from './add.png';
import AddModal from './AddModal';

class Add extends Component {

    constructor (props) {
        super(props)
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
            display: 'none',
        }

        if (this.state.display){
            style.display = 'block';
        }

        return (
            <div className="add">
                <img src={Addicon} className="addicon"  onClick={this.displayModalHandler} alt="add" />  
                <div style={style}>
                    <AddModal {...this.props} />
                </div>               
            </div>
        );
    }
}

export default Add;