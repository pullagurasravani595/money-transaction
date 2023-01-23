// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses, totalBalance} = props

  return (
    <>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="money-container">
          <p className="details-heading">Your Balance</p>
          <p data-testid="balanceAmount">{totalBalance}</p>
        </div>
      </div>
      <div className="balance-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="money-container">
          <p className="details-heading">Your Income</p>
          <p data-testid="incomeAmount">{totalIncome}</p>
        </div>
      </div>
      <div className="balance-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="money-container">
          <p className="details-heading">Your Expenses</p>
          <p data-testid="expensesAmount">{totalExpenses}</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
