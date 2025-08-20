import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SpecialCakes from './pages/SpecialCakes';
import ContactUs from './pages/ContactUs';
import Snacks from './pages/Snacks';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/special-cakes" element={<SpecialCakes />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;