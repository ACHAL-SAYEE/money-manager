import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  onDelete1 = () => {
    const {onDelete, TransactionDetails} = this.props
    const {id} = TransactionDetails
    onDelete(id)
  }

  render() {
    const {TransactionDetails} = this.props
    console.log(TransactionDetails)
    const {title, amount, type2} = TransactionDetails
    return (
      <li className="list">
        <div className="transaction-details">
          <p className="title">{title}</p>
          <p className="title">{amount}</p>
          <p className="title">{type2}</p>
          <button
            data-testid="delete"
            type="button"
            className="delete-btn"
            onClick={this.onDelete1}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </li>
    )
  }
}
export default TransactionItem
