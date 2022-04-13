import React from 'react';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import CustomerArea from './pages/CustomerArea';
import OrderCard from './pages/OrderCard';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/commander-sa-carte" exact element={<OrderCard />} />
          <Route path="/espace-client" exact element={<CustomerArea />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;