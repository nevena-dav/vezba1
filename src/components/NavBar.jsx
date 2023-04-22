import React from 'react';
import {BsCartFill} from "react-icons/bs";

function NavBar() {
  return (
    <div className="navBar">
        <a>My Store</a>
        <div className="cart-item">
            <BsCartFill />
           
        </div>
        <p className="cart-num">0</p>
    </div>
  )
}

export default NavBar