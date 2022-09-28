import React, { useState } from "react";
import "./ExpenseItem.css";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFiltererdYear] = useState("2021");

  const filtererdYearHandler = (filterYear) => {
    setFiltererdYear(filterYear);
  };
  const filteredExpenses = props.Items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filtererdYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList Items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
