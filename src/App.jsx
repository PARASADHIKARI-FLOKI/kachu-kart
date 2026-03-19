import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './layout/Nav'
import Home from './pages/Home'
import Factories from './pages/Factories'
import Admin from './pages/Admin'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App