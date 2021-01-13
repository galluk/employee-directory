import React, { Component } from "react";
import FilterForm from "./FilterForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeeResultContainer extends Component {
  state = {
    empResults: [],
    filter: ""
  };

  // When this component mounts, get the random employees
  componentDidMount() {
    this.getEmployees("10"); // return this many employees
  }
  
  getEmployees = query => {
    API.search(query)
    .then(res => {
      // console.log(res.data.results);
      this.setState({ empResults: res.data.results })
      console.log(this.state.empResults);
    })
    .catch(err => console.log(err));
  };

  filterEmployeesByLastname(match) {  
    if (match !== '') {
      // allow for case sensitivity in search
      const matchRegExp = new RegExp(match, 'i');
      return this.state.empResults.filter(e => matchRegExp.test(e.name.last));
    }
    else {
      return this.state.empResults;
    }
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log('setting filter to: ' + this.state.filter);
    
  };

  // When the form is submitted, filter the employee array on last name
  handleFormSubmit = event => {
    event.preventDefault();
    console.log('filtering by ' + this.state.filter);
    
    this.filterEmployeesByLastname(this.state.filter);
  };

  render() {
    const filteredEmployees = this.filterEmployeesByLastname(this.state.filter);

    return (
      <div>
        <FilterForm
          filter={this.state.filter}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* <EmployeeList results={this.state.empResults} /> */}
        <EmployeeList results={filteredEmployees} />
      </div>
    );
  }
}

export default EmployeeResultContainer;
