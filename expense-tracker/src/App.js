import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 1,
      title: 'Electricity Bill',
      amount: 3000,
      date: new Date(2023, 6, 2)
    },
    {
      id: 2,
      title: 'Fees',
      amount: 1500,
      date: new Date(2023, 6, 4)
    },
    {
      id: 3,
      title: 'Books',
      amount: 2000,
      date: new Date(2023, 6, 7)
    }
  ]

  return (
    <div>
      <h2>Items</h2>
      {/* <ExpenseItem title='Books'></ExpenseItem> This is one way by which we can use Props */}
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
    </div>
  );
}
export default App;
