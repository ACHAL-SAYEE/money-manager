import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {income, expenses} = this.props
    return (
      <div className="money-detail-container">
        <div className="money-detail-card balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="img"
            alt="balance"
          />
          <div>
            <p className="head">Your Balance</p>
            <p className="head2" data-testid="balanceAmount">
              Rs {income - expenses}
            </p>
          </div>
        </div>
        <div className="money-detail-card income">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="img"
            alt="income"
          />
          <div>
            <p className="head">Your Income</p>
            <p className="head2" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="money-detail-card expenses">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="img"
            alt="expenses"
          />
          <div>
            <p className="head">Your Expenses</p>
            <p className="head2" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyDetails
