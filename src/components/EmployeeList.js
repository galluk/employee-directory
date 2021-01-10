import React from "react";

function EmployeeList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.email}>
          <img alt={result.name.first + ' ' + result.name.last} className="img-fluid" src={result.picture.thumbnail} />
          <p>{result.name.first + ' ' + result.name.last}</p>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
