/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

const TableHeader = (props) => {
  const headers = props.headers.map((val, index) => <th key={index.toString()}>{val}</th>);
  return (
    <tr>
      {headers}
    </tr>
  );
};

const TableRow = (props) => {
  const rows = props.row.map((val, index) => <td key={index.toString()}>{val.toString()}</td>);
  return (
    <tr>
      {rows}
    </tr>
  );
};

const Table = (props) => {
  const TableHeaders = Object.keys(props.rows[0]).filter(val => val !== '__v' && val !== '_id');
  const TableRows = props.rows.map((val, index) =>
    <TableRow key={index.toString()} row={TableHeaders.map(objKey => val[objKey])} />);
  console.log('TableHeader', TableHeader);
  console.log('TableRows', TableRows);
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
