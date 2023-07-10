import ExpenseItem from "./ExpenseItem";

const expenseList = props => {
    let expensesContent = <p>No expenses found</p>;
    
    props.items.map(expense=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)


    if(props.items.length > 0) {
        ? expensesContent : expensesContent}
       return expenseList;

    }
}

export default expenseList;