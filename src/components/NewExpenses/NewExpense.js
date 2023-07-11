import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Expense from '../Expenses/Expense';
import { useState } from 'react';


const NewExpense = (props) => {
    //const [formDrawerState,setFormDrawerState] = useState("");
    const [formDrawers,setFormDrawers] = useState(false);

    const onSaveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
            
        };
        props.onSaveExpenseData(expenseData);
    }
    const toogleForm = () => {
        setFormDrawers(formDrawers===false?true:false);
    }
    const formDrawer = () => {
        // console.log("IN");
        // if (formDrawers===false) {
        //     console.log("false")
        //     //return 
        // }
        // console.log(formDrawers);
        //return <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    }

    return <div className='new-expense'>
        {!formDrawers && <div className="new-expense__action"><button onClick={toogleForm}>Add New Expense</button></div>}
        {formDrawers && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>}
    </div>
};

export default NewExpense;