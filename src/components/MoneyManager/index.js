import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

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
const initialTransactionList = []
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    type2: 'Income',
    TransactionList: initialTransactionList,
    income: 0,
    expenses: 0,
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  updateType = event => {
    this.setState({type: event.target.value})
    if (event.target.value === 'INCOME') {
      this.setState({type2: 'Income'})
    } else {
      this.setState({type2: 'Expenses'})
    }
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type, type2} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
      type2,
    }
    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newTransaction],
      title: '',
      amount: '',
    }))
    if (newTransaction.type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + newTransaction.amount,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + newTransaction.amount,
      }))
    }
  }

  onDelete = id => {
    const {TransactionList} = this.state
    const Transaction1 = TransactionList.find(
      Transaction => Transaction.id === id,
    )

    if (Transaction1.type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - Transaction1.amount,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - Transaction1.amount,
      }))
    }

    const newList = TransactionList.filter(Transaction => Transaction.id !== id)
    this.setState(prevState =>
      //   console.log(Transaction1)
      //   console.log(prevState.income, typeof prevState.income)
      //   console.log(Transaction1.income, typeof Transaction1.income)
      ({
        TransactionList: newList,
      }),
    )
    console.log(Transaction1)
  }

  render() {
    const {TransactionList, title, type, amount, income, expenses} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container2">
          <div className="bg-welcome">
            <h1>Hi,Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} expenses={expenses} />
          <div className="inputAndHistory">
            <div>
              <h1>Add Transaction</h1>
              <form>
                <div className="input-con">
                  <label htmlFor="title">TITLE</label>
                  <input id="title" onChange={this.updateTitle} value={title} />
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    id="amount"
                    onChange={this.updateAmount}
                    value={amount}
                  />
                  <label htmlFor="type">TYPE</label>
                  <select id="type" onChange={this.updateType} value={type}>
                    {transactionTypeOptions.map(type1 => {
                      let p = null
                      if (type1.optionId === 'INCOME') {
                        p = true
                      } else p = false
                      return (
                        <option
                          key={type1.optionId}
                          value={type1.optionId}
                          selected={p}
                        >
                          {type1.displayText}
                        </option>
                      )
                    })}
                  </select>
                  <button type="submit" onClick={this.addTransaction}>
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h1>History</h1>
              <ul>
                <li className="list">
                  <div className="transaction-details">
                    <p className="title">Title</p>
                    <p className="title">Amount</p>
                    <p className="title">Type</p>
                  </div>
                </li>
                {TransactionList.map(Transaction => (
                  <TransactionItem
                    key={Transaction.id}
                    TransactionDetails={Transaction}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
