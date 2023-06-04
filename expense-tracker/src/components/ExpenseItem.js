import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = new Date(2023, 3, 12);
  const expenseTitle = 'Salary';
  const expenseAmount = 100000;

  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
