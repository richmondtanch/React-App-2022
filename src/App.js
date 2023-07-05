import logo from './logo.svg';
import './App.css';


import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);


  const addExpenseHandler = (expense) => {
    console.log(expense);
    
    setExpenses(prevExpense=> {
      console.log(prevExpense);
      return [expense, ...prevExpense];
    });
    console.log(expenses);
  }



  

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={addExpenseHandler}/>
      <Expense items={expenses}/>
      </div>
  );
}

export default App;
