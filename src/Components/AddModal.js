import React, { Component } from 'react';
import './AddModal.css';

class AddModal extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lists: 'Hi',
    //         inputValue: 'hey'
    //     }
    // }

    // onAddTask = () => {
    //     this.setState ({
    //         list: this.state.inputValue
    //     });
    // }

    // updateInputValue = (event) => {
    //     this.setState({
    //       inputValue: event.target.value
    //     });
    //   }

    render () {
        return (
            <div className="addmodal">
                <label className="head">Add my ToDo</label>
                <input type ="text" className="text" value={this.props.inputV} onChange={this.props.inputValues} />
                <button type="submit" className="addbutton" onClick={this.props.addTask}>Add the task</button>
            </div>
        );
    }
}

export default AddModal;