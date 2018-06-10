/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

function TableHeader(props) {
  const headers = props.headers.map((val, index) => <th key={index.toString()}>{val}</th>);
  return (
    <tr>
      {headers}
    </tr>
  );
}

function TableRow(props) {
  const rows = props.row.map((val, index) => <td key={index.toString()}>{val}</td>);
  return (
    <tr>
      {rows}
    </tr>
  );
}

function Table(props) {
  const TableRows = props.rows.map((val, index) =>
  <TableRow key={index.toString()} row = {Object.values(val)}/>);
  return (
    <table>
       <tbody>
        <TableHeader headers = {Object.keys(props.rows[0])}/>
        {TableRows}
      </tbody>
    </table>
  );
}

export default Table;
