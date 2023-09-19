import React, { useId } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearSelectId = useId();

  const yearChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor={yearSelectId}>Filter by year</label>
        <select
          id={yearSelectId}
          value={props.selected}
          onChange={yearChangeHandler}
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
