import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

  //no use of this because we have used props instead
  // const expenseDate = new Date(2023, 3, 12);
  // const expenseTitle = 'Salary';
  // const expenseAmount = 100000;

  
  return (
    <Card className='expense-item'>
        {/* <ExpenseDate></ExpenseDate> */}
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
