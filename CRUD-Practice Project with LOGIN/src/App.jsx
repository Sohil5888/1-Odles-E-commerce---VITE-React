import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './NavbarCompo/Navbar'
import Home from './Home'
import About from './About'
import User from './User'
import NewUser from './UserCompo/NewUser'
import EditUser from './UserCompo/EditUser'
import UserDetails from './UserCompo/UserDetails'
import Login from './Login'
import Admin from './Admin'

function App() {

  return (
    <>
     <Router >
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user' element={<User />} />
            <Route path='/newuser' element={<NewUser />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/edituser/:id' element={<EditUser />} />
            <Route path='/userdetails/:id' element={<UserDetails />} />
          </Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
