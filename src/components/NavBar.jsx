import React from 'react';
import {BsCartFill} from "react-icons/bs";

function NavBar({cartNum}) {
    //const cartNum = 0;
  return (
    <div className="navBar">
        <a>My Store</a>
        <div className="cart-item">
            <BsCartFill />
           
        </div>
        <p className="cart-num">{cartNum}</p>
    </div>
  )
}

export default NavBar