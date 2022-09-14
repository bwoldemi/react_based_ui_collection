import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Signup from './signup';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    
  </React.StrictMode>
)*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
  

    </Routes>
    
  </BrowserRouter>




)