import React, { useEffect } from 'react';
import axios from "axios";
import "./Order.css";

const Order = () => {
  const url = "http://localhost:4000";

  const fetchorderlist = async()=>{
    const response = await axios.get(`${url}/api/order/allorder`);
    console.log(response);
  }

  useEffect(()=>{
    fetchorderlist();
  },[])
  
  return (
    <div className='order'>
      
    </div>
  )
}

export default Order
