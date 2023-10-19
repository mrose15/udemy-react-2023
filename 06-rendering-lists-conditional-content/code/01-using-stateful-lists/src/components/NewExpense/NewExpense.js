import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  let formDisplay;

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  if (showForm === true) {
    formDisplay = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        hideFormHandler={() => {
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <div className="new-expense">
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add New Expense
      </button>
      {formDisplay}
    </div>
  );
};

export default NewExpense;
