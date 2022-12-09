import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

import { BrowserRouter } from "react-router-dom"
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>    
    <Register />
  </BrowserRouter>
)