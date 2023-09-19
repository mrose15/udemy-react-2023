import React, { useState, useId } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelectId = useId();

  const [filteredYear, setFilterYear] = useState("");

  const yearChangeHandler = (e) => {
    const yearData = {
      value: filteredYear,
    };
    setFilterYear(e.target.value);
    props.selectYear(yearData);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor={yearSelectId}>Filter by year</label>
        <select
          id={yearSelectId}
          onChange={yearChangeHandler}
          value={filteredYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
