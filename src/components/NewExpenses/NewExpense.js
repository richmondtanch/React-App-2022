import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Expense from '../Expenses/Expense';
import { useState } from 'react';


const NewExpense = (props) => {
    //const [formDrawerState,setFormDrawerState] = useState("");
    const [formDrawer,setFormDrawer] = useState(false);

    const onSaveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
            
        };
        props.onSaveExpenseData(expenseData);
        setFormDrawer(false);
    }
    const stopEditing = () => {
        setFormDrawer(false);
    }
    const isEditing = () => {
        setFormDrawer(true);
    }

    return <div className='new-expense'>
        {!formDrawer && <div className="new-expense__action"><button onClick={isEditing}>Add New Expense</button></div>}
        {formDrawer && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onToggle={stopEditing}></ExpenseForm>}
    </div>
};

export default NewExpense;