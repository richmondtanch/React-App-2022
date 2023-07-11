import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const expensesList = props => {
    let expensesContent = <h2 className="expenses-list__fallback">No expenses found</h2>;
    
    


    if(props.items.length > 0) {
        expensesContent = props.items.map(expense=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>);
    }
    // else
    //     return <h2 className="expenses-list__fallback">Found no expenses.</h2>

    return <ul className="expenses-list">{expensesContent}</ul>
}

export default expensesList;