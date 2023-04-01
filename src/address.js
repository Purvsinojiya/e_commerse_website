import React from 'react'
import {useHistory} from "react-router-dom";

const Address = () => {
  const navigate= useHistory();
  return (
    <div>
      <button onClick={() =>{
    navigate.push('/payment');
    }}>hi</button>
    </div>
  )
}

export default Address
