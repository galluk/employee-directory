import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import "./style.css";

function EmployeeTable(props) {
  
  function imageFormatter(cell, row){
    return (<img src={""+cell+""} alt=" " />);
  }

  // set up columns for the bootstrap table
  const tableColumns = [
    { dataField: 'img', text: 'Image', formatter: imageFormatter },
    { dataField: 'firstName', text: 'First Name', sort: true },
    { dataField: 'lastName', text: 'Last Name', sort: true },
    { dataField: 'email', text: 'Email', sort: true }
  ];  
  
  // map the given array to the bootstrap table array
  const tableData = props.results.map(result => ({
    img: result.picture.medium,
    firstName: result.name.first,
    lastName: result.name.last,
    email: result.email
  }));  

  console.log(tableData);

  return (

    <BootstrapTable 
      className='empTable'
      bootstrap4
      keyField='email' 
      data={ tableData } 
      columns={ tableColumns } 
      >
    </BootstrapTable>
  );
}

export default EmployeeTable;
