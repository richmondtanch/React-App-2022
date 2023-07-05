import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expense = (props) => {

    
    const [year,setYear] = useState("2020");
    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString()===year);
    const onSaveYearHandler= (selectedYear) => {
        setYear(selectedYear);
        //setfilteredExpenses();
    }

    let expensesContent = filteredExpenses.map(expense=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={year} onSaveYear={onSaveYearHandler}></ExpensesFilter>
                {filteredExpenses.length ===0 ? <p>No expenses found</p> : expensesContent}
            </Card>
        </div>
    );
}

export default Expense