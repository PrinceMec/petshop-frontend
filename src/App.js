import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Description from './components/Description';
import ShopByPet from './components/ShopByPet';
import Brand from './components/Brand';
import Footer from './components/Footer';
import StoreByCategory from './components/StorebyCategory';
import Login from './components/Login';
import Register from './components/Register'
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'
import PaymentForm from './components/PaymentForm';
import Success from './components/Success';

function App() {
  
  return (
    <Router>
      <div className="App" style={{backgroundColor:'#e5e7eb'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>
            <Description />
            <ShopByPet />
            <Brand />
            
          </div>}>
          </Route>
            <Route path="/store" element={<Store />} />
            <Route path="/products" element={<StoreByCategory />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentForm/>}/>
            <Route path="/success" element={<Success/>}/>
           
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
