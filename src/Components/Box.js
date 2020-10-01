import React from 'react';
import './Box.css';

const Box  = props => 
        <div className="boxbody">
            <div className="list">
                {props.createTodo}
            </div>
        </div>

export default Box;