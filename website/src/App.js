import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import CustomerArea from './pages/CustomerArea';
import OrderCard from './pages/OrderCard';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/Client?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const articles = await response.json()
    this.setState({
      articles: articles
    })
    this.setState({
      articles: articles
    })
    if (localStorage.getItem('cart') !== null) {
      this.setState({
        cart: JSON.parse(localStorage.getItem('cart'))
      })
    }
  }

  addArticleToCart = (article) => {
    this.setState({
      cart: [
        ...this.state.cart,
        article
      ]
    }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))

  }

  removeArticleFromCart = (articleToRemove) => {
    let index = this.state.cart.findIndex(item => item.id === articleToRemove.id)
    const tempCart = [...this.state.cart]
    if (index >= 0) {
      tempCart.splice(index, 1)
      this.setState({
        cart: [...tempCart]
      }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/commander-sa-carte" exact element={<OrderCard />} />
          <Route path="/espace-client" exact element={<CustomerArea />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

export default App;