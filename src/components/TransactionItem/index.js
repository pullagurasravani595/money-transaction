// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onRemoveHistoryItem} = props
  const {title, amount, type, id} = details

  const deleteHistory = () => {
    onRemoveHistoryItem(id)
  }

  return (
    <>
      <li className="list-container">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button type="button" className="delete-btn" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="image"
          />
        </button>
      </li>
    </>
  )
}

export default TransactionItem
