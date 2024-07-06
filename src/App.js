import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './page/Home'
import PaymentSuccess from './page/PaymentSuccess'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paymentsuccess'  element={<PaymentSuccess/>}/>
      </Routes>

    </Router>
  )
}

export default App