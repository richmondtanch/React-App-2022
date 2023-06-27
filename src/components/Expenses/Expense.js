import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expense = (props) => {
    const [year,setYear] = useState("2020");
    const onSaveYearHandler= (selectedYear) => {
        setYear(selectedYear);
        console.log(year);
    }
    return (
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter selected={year} onSaveYear={onSaveYearHandler}></ExpensesFilter>
                {props.items.map(expense=> <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    );
}

export default Expense