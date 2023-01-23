import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    historyList: [],
  }

  addHistoryDetailsToList = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({type: event.target.value})
  }

  getIncomeAmount = () => {
    const {historyList} = this.state
    let incomeAmt = 0

    historyList.forEach(item => {
      if (item.type === 'Income') {
        incomeAmt += parseInt(item.amount)
      }
    })
    return incomeAmt
  }

  getExpensesAmount = () => {
    const {historyList} = this.state
    let expensesAmt = 0

    historyList.forEach(item => {
      if (item.type === 'Expenses') {
        expensesAmt += parseInt(item.amount)
      }
    })
    return expensesAmt
  }

  getBalanceAmount = () => {
    const {historyList} = this.state
    let balanceAmt = 0

    historyList.forEach(item => {
      if (item.type === 'Income') {
        balanceAmt += parseInt(item.amount)
      } else if (item.type === 'Expenses') {
        balanceAmt -= parseInt(item.amount)
      }
    })
    return balanceAmt
  }

  onRemoveHistoryItem = id => {
    const {historyList} = this.state
    const filterResults = historyList.filter(
      eachHistorDetails => eachHistorDetails.id !== id,
    )

    this.setState({
      historyList: filterResults,
    })
  }

  render() {
    const {title, amount, type, historyList} = this.state
    const incomeValue = this.getIncomeAmount()
    const expensesValue = this.getExpensesAmount()
    const balanceValue = this.getBalanceAmount()
    console.log(incomeValue)
    console.log(expensesValue)

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Hi Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            totalIncome={incomeValue}
            totalExpenses={expensesValue}
            totalBalance={balanceValue}
          />
        </div>
        <div className="bottom-container">
          <form
            className="form-container"
            onSubmit={this.addHistoryDetailsToList}
          >
            <h1 className="form-heading">Add Transaction</h1>
            <div className="title-container">
              <label htmlFor="title" className="label-element">
                TITLE
              </label>
              <input
                type="text"
                className="input-element"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitleInput}
              />
            </div>
            <div className="title-container">
              <label htmlFor="amount" className="label-element">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input-element"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmountInput}
              />
            </div>
            <div className="title-container">
              <label htmlFor="type" className="label-element">
                TYPE
              </label>
              <select
                id="type"
                className="input-element"
                value={type}
                onChange={this.onChangeTypeInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="form-heading">History</h1>
            <ul className="details-container">
              <div className="history-description-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              {historyList.map(eachItem => (
                <TransactionItem
                  details={eachItem}
                  key={eachItem.id}
                  onRemoveHistoryItem={this.onRemoveHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
