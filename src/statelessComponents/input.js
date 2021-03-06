import React from 'react'; // eslint-disable-line no-unused-vars

// A functional component for html input element
const InputField = props => <div>
       <label htmlFor="filterBox">{props.text}</label>
        <input
            type={props.type}
            className="form-control"
            id="filterBox"
            placeholder= {props.placeholder}
            name="filterBox"
            value={props.currentValue}
            onChange = {props.onHandleChange}
        />
        {props.validation ? <div></div> : <div><p style={{ color: 'red' }}>{props.message}</p></div>}
    </div>;


export default InputField;
