import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'
import React, {useState} from 'react';



function ExpenseItem(props) {
    //const expenseDate = new Date(2022,10,5);
    //const ExpenseTitle = 'Car Insurance';
    //const expenseAmount = '297.67';
    const [title, setTitle] = useState(props.title);

    const clickedHandler = () => {
        setTitle("Updated title");
    }    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickedHandler}>change title</button>
        </Card>
    );
}



export default ExpenseItem;