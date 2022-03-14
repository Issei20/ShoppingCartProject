import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Shop from "./Shop";
import NavBar from "./NavBar"
import "./style.css"
import Cart from "./Cart"
import React, { useState } from "react"
import diamondBlock from './diamondBlock.png';
import diamondSword from './diamondSword.png';
import diamondPickaxe from './diamondPickaxe.png';

const RouteSwitch = () => {
  const [cartQuantity, setCartQuantity] = useState(0); 
  const [cartArr, setCartArr] = useState([{name: "Diamond Block",
  price: 10, 
  img: diamondBlock,
  id: "db",
  quantity: 0}, 
  {name: "Diamond Sword",
  price: 5, 
  img: diamondSword ,
  id: "ds",
  quantity: 0}, 
  {name: "Diamond Pickaxe",
  price: 6, 
  img: diamondPickaxe,
  id: "dp",
  quantity: 0}, ]);

  const [totalPrice, setTotalPrice] = useState(0)
  

  return (
    <BrowserRouter>
      <NavBar cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>
      <Routes>
      <Route path="shop" element={<Shop cartArr={cartArr} setCartArr={setCartArr} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>} />
      <Route path="/ShoppingCartProject"  element={<HomePage />} />
      <Route path="shop/cart" element={<Cart cartArr={cartArr} setCartArr={setCartArr} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default RouteSwitch;