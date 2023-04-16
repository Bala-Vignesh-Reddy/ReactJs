import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>April 16 2023</div>
            <div className='expense-item__description'> 
                <h2>Books</h2>
                <div className='expense-item__price'>1000Rs</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
