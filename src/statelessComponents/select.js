import React from 'react'; // eslint-disable-line no-unused-vars

// A functional component for html select options
const Select = (props) => {
  const options = props.options.map((val, index) => <option key={index.toString()}>{val}</option>);
  return (
    <div>
      <label htmlFor="filterField">{props.text}</label>
        <select
          id= "filterField"
          className="form-control"
          onChange={props.onSelectChange}
          value={props.currentValue}
        >
        {options}
        </select>
    </div>
  );
};

export default Select;
