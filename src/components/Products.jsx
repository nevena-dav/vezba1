import React from 'react';
import OneProduct from './OneProduct';

function Products({products, onAdd}) {
    //const name = "Naziv proizvoda";
    //const desc= "Ovo je malo dui opis proizvoda";
   /* const product = {
        title: "Naziv proizvoa",
        description: "Jesteee",
    }*/

    
  return (
    <div className='all-products'>
       {products.map((prod) => (  
            <OneProduct product={prod} key={prod.id} onAdd={onAdd}/>
        ))}
        

        {/*products.map((prod)=> {
            return <OneProduct product={prod} />;
        })*/}
       {/*<OneProduct product={products[0]}/>
        <OneProduct product={products[1]}/>
  <OneProduct product={products[2]}/>*/}

    </div>
  )
}

export default Products