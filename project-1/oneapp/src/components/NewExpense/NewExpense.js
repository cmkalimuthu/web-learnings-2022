import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [viewForm, setViewForm] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    setViewForm(false);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const viewFormHandler = () => {
    setViewForm(true);
  };
  const stopEditingForm =()=>{
    setViewForm(false)
  }

  return (
    <div className="new-expense">
      {!viewForm && <button onClick={viewFormHandler}> Add New Expense </button>}
      {viewForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingForm}/>}
    </div>
  );
};

export default NewExpense;
