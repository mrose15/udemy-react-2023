import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // must be called directly inside component functions
  // first is current, 2nd is updated value
  // setTitle is a function that gets registered with useState
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!"); //pass new value as arg, this is scheduled so the console.log will still output original value
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
