import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import CustomerArea from './pages/CustomerArea';
import OrderCard from './pages/OrderCard';
import Tournois from './pages/Tournois';
import FAQ from './pages/FAQ';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tournois" exact element={<Tournois />} />
          <Route path="/commander-sa-carte" exact element={<OrderCard />} />
          <Route path="/espace-client" exact element={<CustomerArea />} />
          <Route path="/FAQ" exact element={<FAQ />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  };
}


export default App;