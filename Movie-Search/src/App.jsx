import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SingleMovie from './SingleMovie'
import Error from './Error'

function App() {

  return (
    <>
      {/* <BrowserRouter > */}
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
