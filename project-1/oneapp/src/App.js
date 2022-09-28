import React ,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSE = [
  {
    id: "ä1",
    title: "Car Insurance",
    date: new Date(2021, 2, 1),
    amount: 292.03,
  },
  {
    id: "ä2",
    title: "Toilet Paper",
    date: new Date(2021, 2, 15),
    amount: 300.03,
  },
  {
    id: "a3",
    title: "New Tv",
    date: new Date(2021, 2, 17),
    amount: 290.03,
  },
];
function App() {
  
  const [expenses,setExpenses]=useState(INITIAL_EXPENSE);

  const addExpenseHandler=(expenseData)=>{
    setExpenses((prevExpense)=>{ return [expenseData,...prevExpense]})
    console.log(expenses)
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses Items={expenses}/>
    </div>
  );
}

export default App;
