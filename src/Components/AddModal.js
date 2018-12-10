import React, { Component } from 'react';
import './AddModal.css';

class AddModal extends Component {
    render () {
        return (
            <div className="addmodal">
                <label className="head">Add my ToDo</label>
                <input type ="text" className="text" />
                <button type="submit" className="addbutton">Add the task</button>
            </div>
        );
    }
}

export default AddModal;