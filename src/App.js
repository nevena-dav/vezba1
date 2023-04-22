import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  //let cartNum =0;
 // const [first, setfirst] = useState(second) konstanta koja predstavlja niz od 2
 //elementa, 1.el je promenljiva cartnum, 2.el fja koja sluzi za menjanje vrednosti
 //prve promenljive, sa desne starane korisimo usestate hook, pocetno stanje
 const [cartNum, setCartNum] = useState(0);
 //const prom = <h3>Cao svima!</h3>
 const products = [
  {
  id: 1,
  title: "Chocolate",
  description:
  "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
  amount: 0,
  },
  {
  id: 2,
  title: "Lollypop",
  description:
  "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
  amount: 0,
  },
  {
  id: 3,
  title: "Ice Cream",
  description:
  "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
  amount: 0,
  },
  ];
  function addProduct(title){
    //console.log("Dodat je proizvod" + title);
    setCartNum(cartNum+1);
  }
  return  <div className="App">
    <NavBar cartNum={cartNum}></NavBar>
   
    <Products products={products} onAdd={addProduct}/>
     </div>;
}

export default App;
