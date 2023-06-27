import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Expense from '../Expenses/Expense';


const NewExpense = (props) => {
    const onSaveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
            
        };
        props.onSaveExpenseData(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;