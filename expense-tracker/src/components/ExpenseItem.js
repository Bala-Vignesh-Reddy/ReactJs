import './ExpenseItem.css';

function ExpenseItem(props) {

  //no use of this because we have used props instead
  // const expenseDate = new Date(2023, 3, 12);
  // const expenseTitle = 'Salary';
  // const expenseAmount = 100000;

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { year: '2-digit' });
  const year = props.date.getFullYear(); 

  return (
    <div className='expense-item'>
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
