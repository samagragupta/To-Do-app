import React, { Component } from 'react';
import './Add.css'
import Addicon from './add.png';
import AddModal from './AddModal';

const Add = props =>
        <div className="add">
            <img src={Addicon} className="addicon"  onClick={props.displayn} alt="add" />  
            <div style={props.displayStyle}>
                <AddModal {...props} />
            </div>
        </div>
        

export default Add;