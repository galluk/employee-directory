import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Filter by Last Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="filter"
          type="text"
          className="form-control"
          placeholder="filter"
          id="filter"
        />
        {/* <button onClick={props.handleFormFilter} className="btn btn-primary mt-3">
        Filter
        </button> */}
      </div>
    </form>
  );
}

export default FilterForm;