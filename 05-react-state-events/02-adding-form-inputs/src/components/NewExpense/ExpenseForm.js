import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //initialize state with string
  // using multiple states is more common, both approaches are fine
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // event arg occurs here as an event listener
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // not good practice to update it like this, this depends on previous state snapshot to copy in the existing values and override one value with a new one
    //whenever you update state and you depend on the previous state, you should use alt form, see below
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // React schedules state update, it doesn't perform them instantly
    //So if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use the above approach
    // Using the below will guarantee the state snapshot it gives you here in this inner function will always be the latest state snapshot, keeping all scheduled state updates in mind.
    //*** Best way to track state ***///
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  //shared changeHandler function as alternative
  // react will not pass identifier and value on function call so you have to use a wrapper arrow function onChange
  // onChange={(event) => inputChangeHandler('title', event.target.value)}
  /*
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };
  */

  const submitHandler = (e) => {
    e.preventDefault(); //keeps page from reloading
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(`${enteredDate}T00:00-0800`),
    };

    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
