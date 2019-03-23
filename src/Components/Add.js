import React, { Component } from 'react';
import './Add.css'
import Addicon from './add.png';
import AddModal from './AddModal';

class Add extends Component {

    render () {
        return (
            <div className="add">
                <img src={Addicon} className="addicon"  onClick={this.props.displayn} alt="add" />  
                <div style={this.props.displayStyle}>
                    <AddModal {...this.props} />
                </div>
            </div>
        );
    }
}

export default Add;