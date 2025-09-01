import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Order from './pages/order/Order';
import List from './pages/List/List';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
