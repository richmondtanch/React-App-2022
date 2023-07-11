import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';

const Expense = (props) => {

    
    const [year,setYear] = useState("2020");
    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString()===year);
    const onSaveYearHandler= (selectedYear) => {
        setYear(selectedYear);
        //setfilteredExpenses();
    }

    
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={year} onSaveYear={onSaveYearHandler}></ExpensesFilter>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expense