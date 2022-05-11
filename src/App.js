import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Login from './auth/Login'
import Registration from './auth/Register'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signin' element={<Registration />} />
        <Route exact path='/login' element={<Login />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App