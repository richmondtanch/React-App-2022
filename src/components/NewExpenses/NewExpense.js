import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Expense from '../Expenses/Expense';


const NewExpense = (props) => {
    const onSaveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSaveExpenseData(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;