import React from 'react'
import { useState } from 'react'
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
import ForgetPassword from './auth/ForgetPassword'
import VerifyCode from './auth/VerifyCode'
import Newpassword from './auth/Newpassword'
import AuthPopup from './auth/AuthPopup'
import Factoriedetails from './details/Factoriesdetails'

const App = () => {
   const [openPopup, setOpenPopup] = useState(false);
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/new-password" element={<Newpassword />} />
         <Route path="/" element={<Shop />} />
        <Route path="/shop/:name" element={<Shopdetails />} />
         <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Productsdetails />} />
         <Route path="/" element={<Factories />} />
        <Route path="/factories/:name" element={<Factoriedetails />} />
        

      </Routes>
       <Footer/>


      {openPopup && (
        <AuthPopup onClose={() => setOpenPopup(false)} />
      )}

    </div>
  )
}

export default App