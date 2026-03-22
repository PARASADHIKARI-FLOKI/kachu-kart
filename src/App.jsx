import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './layout/Nav'
import Home from './pages/Home'
import Factories from './pages/Factories'
import Admin from './pages/Admin'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Footer from './layout/Footer'
import Shop from './components/Shop'
import Shopdetails from './details/Shopdetails'
import Products from './components/Products'
import Productsdetails from './details/Productsdetails'

const App = () => {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<Shop />} />
        <Route path="/shop/:name" element={<Shopdetails />} />
         <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Productsdetails />} />

      </Routes>
       <Footer/>
    </div>
  )
}

export default App