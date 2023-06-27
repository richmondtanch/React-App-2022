import "./ExpenseForm.css";
import { useState } from "react";


const ExpenseForm = (props) => {
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleHandler = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    const amountHandler = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value);
    }
    const dateHandler = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        setAmount('');
        setDate('');
        setTitle('');
        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type="text" value={title} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
                </div>
                <div className="new-expense__action">
                    <button>Submit</button>
                    
                </div>
            </div>
        </form>
    )
    
}

export default ExpenseForm;