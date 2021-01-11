import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeeResultContainer extends Component {
  state = {
    search: "",
    empResults: []
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

  render() {
    return (
      <div>
        <EmployeeList results={this.state.empResults} />
      </div>
    );
  }
}

export default EmployeeResultContainer;
