import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state = {
    orders: []
  }

  addOrder = (order) => {
    let newArray = [...this.state.orders, order]
    this.setState({
      orders: newArray
    })
  }

  createOrders = () => {
    return this.state.orders.map((order, idx) => <Order key={idx} {...order} />)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./images/logo.png')} className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder} />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            {this.createOrders()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
