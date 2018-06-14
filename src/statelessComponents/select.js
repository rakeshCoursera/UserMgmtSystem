/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

const Select = (props) => {
  console.log('select props', props);
  const options = props.options.map((val, index) => <option key={index.toString()}>{val}</option>);
  return (
    <div>
      <label htmlFor="filterField">Filter Using</label>
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
