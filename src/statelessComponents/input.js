/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

const InputField = props => <div>
       <label htmlFor="filterBox">Filter Value:</label>
          <input
            type="text"
            className="form-control"
            id="filterBox"
            placeholder= {props.placeholder}
            name="filterBox"
            value={props.currentValue}
            onChange = {props.onHandleChange}
        />
    </div>;


export default InputField;
