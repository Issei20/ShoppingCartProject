import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import diamondBlock from './diamondBlock.png';
import diamondSword from './diamondSword.png';
import diamondPickaxe from './diamondPickaxe.png';



const Shop = ({cartArr, setCartArr, cartQuantity, setCartQuantity, totalPrice, setTotalPrice}) => {


 let cartItems = cartArr;
 let indexSelectedItem;

 function addToCart(e) {  


    // add 1 to the quantity of the item selected
    indexSelectedItem = cartArr.findIndex(item => item.id === e.target.id);
    cartItems[indexSelectedItem].quantity = cartItems[indexSelectedItem].quantity + 1;
    setCartArr(cartItems)

    //calculate th new quantity in the shoping cart 
    var totalQuantity = cartItems.reduce(function(prev, cur) {
      return prev + cur.quantity
    },0)
    setCartQuantity(totalQuantity)

    var totalPriceValue = cartItems.reduce(function(prev, cur) {
      return prev + (cur.quantity * cur.price)
    },0)
    setTotalPrice(totalPriceValue)
       
  }

  function renderList() {
    return (cartArr.map(item => {
      return (<li className="liItemWrap" key={item.id}>
      <p>{item.name} </p>
      <img className="itemImg" src={item.img} alt="imgItem"/> 
      <p>{item.price} $ </p>  
      <button id={item.id} className="addToCart" onClick={(e) => addToCart(e)}>Add to cart</button></li>)
    }))
  }

  /*
  useEffect(() => {
    console.log('useEffect cartArr', cartArr)
    console.log('useEffect cartQuantity', cartQuantity)
  },[cartArr, cartQuantity])
  */
 
    return (
        <div className='shopContainer'>
       
          <div className="itemsSection">
           {renderList()}
           </div>
         
        </div>
      );
    };
    
    
    export default Shop;