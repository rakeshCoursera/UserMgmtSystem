import React from 'react'; // eslint-disable-line no-unused-vars

// A functional component to reder the table

// Make the Table header
const TableHeader = (props) => {
  const headers = props.headers.map((val, index) => <th key={index.toString()}>{val}</th>);
  headers.push(<th key='Actions'>Actions</th>);
  return (
    <tr>
      {headers}
    </tr>
  );
};

// Make the Table Row
const TableRow = (props) => {
  let isactive = false;
  const rows = props.row.map((val, index) => {
    if (index === 0) {
      return (
        <td key={index.toString()}>
          <button type="button" className="btn btn-link" onClick = {() => props.onRowHandleClick(props.rowNo)}>
            {val}
          </button>
        </td>);
    }

    if (index === (props.row.length - 1)) {
      isactive = val;
      const textValue = val === true ? 'Active' : 'Inactive';
      const colorValue = val === true ? { color: 'green' } : { color: 'red' };
      return <td key={index.toString()}> <p style={colorValue}>{textValue} </p></td>;
    }
    return <td key={index.toString()}>{typeof val === 'string' ? val : val.toString() } </td>;
  });
  rows.push(<td key='Edit'>
    <button type="button" className="btn btn-link" onClick = {() => props.onActionHandleClick(props.rowNo)} data-toggle="modal" data-target="#myModal">
      Edit
    </button>
    <label>IsActive <input type="checkbox" checked={isactive} value={isactive} onChange={() => props.onCheckboxChange(props.rowNo)}/></label>
  </td>);
  return (
    <tr>
      {rows}
    </tr>
  );
};

// Make the Table
const Table = (props) => {
  const TableHeaders = Object.keys(props.rows[0]).filter(val => val !== '__v' && val !== '_id');
  const TableRows = props.rows.map((val, index) =>
    <TableRow
      key={index.toString()}
      rowNo = {index}
      isactive={props.isactive}
      row={TableHeaders.map(objKey => val[objKey])}
      onRowHandleClick = {props.onHandleClick}
      onActionHandleClick = {props.onActionsClick}
      onCheckboxChange = {props.onCheckboxChange}
    />);
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <TableHeader headers={TableHeaders} />
        </thead>
        <tbody>
          {TableRows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
