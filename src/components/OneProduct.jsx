import React from 'react';
import {BsPlusLg, BsDashLg} from "react-icons/bs";

function OneProduct({product, onAdd}) {
    
  return (
    <div className="card" style={{margin:10, borderStyle: "dotted"}}>
        <img className="card-img-top" src="https:/picsum.photos/200" alt="Neka slika" />
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
        </div>
        <button className="btn" onClick={()=>onAdd(product.title)}>
        <BsPlusLg />
        </button>
        <button className="btn">
            <BsDashLg />
        </button>
    </div>
  )
}

export default OneProduct