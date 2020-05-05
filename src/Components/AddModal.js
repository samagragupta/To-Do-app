import React, { Component } from 'react';
import './AddModal.css';

class AddModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            priority: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            priority: event.target.value
        });
        // this.props.checkbox();
    }

    render() {
        return (
            <div className="addmodal">
                <label className="head">Add my ToDo</label>
                <input type="text" className="text" value={this.props.inputV} onChange={this.props.inputValues} />
                <input type="date" placeholder="Deadline YYYY-MM-DD" value={this.props.inputDeadline} onChange={this.props.inputDeadlines} />
                <div>
                    <label>
                        <input
                            type="radio"
                            value= "low"
                            checked = {this.props.tick1}
                            onChange={this.props.checkOnChange}
                        />
                                Low
                            </label>
                    <label>
                        <input
                            type="radio"
                            value= "medium"
                            checked = {this.props.tick2}
                            onChange={this.props.checkOnChange}
                        />
                                Medium
                            </label>
                    <label>
                        <input
                            type="radio"
                            value= "high"
                            checked = {this.props.tick3}
                            onChange={this.props.checkOnChange}
                        />
                                High
                            </label>
                </div>
                <button type="submit" className="addbutton" onClick={this.props.addTask} >Add the task</button>
            </div>
        );
    }
}

export default AddModal;