import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react"



function Cart({cartArr, setCartArr, cartQuantity, setCartQuantity, totalPrice, setTotalPrice} ) {

    const [changeCart, setChangeCart] = useState(null);

    function decrementQuantity(e) {
        let indexSelectedItem = cartArr.findIndex(item => item.id === e.target.id);
        let itemsArr = cartArr;
        itemsArr[indexSelectedItem].quantity =  itemsArr[indexSelectedItem].quantity - 1;
        setCartArr(itemsArr)
        setCartQuantity(cartQuantity - 1)
        var totalPriceValue = itemsArr.reduce(function(prev, cur) {
            return prev + (cur.quantity * cur.price)
          },0)
          setTotalPrice(totalPriceValue)
        
    }

    function incrementQuantity(e) {
        let indexSelectedItem = cartArr.findIndex(item => item.id === e.target.id);
        let itemsArr = cartArr;
        itemsArr[indexSelectedItem].quantity =  itemsArr[indexSelectedItem].quantity + 1;
        setCartQuantity(cartQuantity + 1)
        setCartArr(itemsArr)
        var totalPriceValue = itemsArr.reduce(function(prev, cur) {
            return prev + (cur.quantity * cur.price)
          },0)
          setTotalPrice(totalPriceValue)
    }
   
   function removeItem(e) {
       let indexSelectedItem = cartArr.findIndex(item => item.id === e.target.id);
       let itemsArr = cartArr;
       setCartQuantity(cartQuantity - itemsArr[indexSelectedItem].quantity)
       itemsArr[indexSelectedItem].quantity = 0;
       setCartArr(itemsArr)
       var totalPriceValue = itemsArr.reduce(function(prev, cur) {
            return prev + (cur.quantity * cur.price)
          },0)
          setTotalPrice(totalPriceValue)
       
   }


   function handle(e) {
    let indexSelectedItem = cartArr.findIndex(item => item.id === e.target.id);
    let itemsArr = cartArr;
    if(e.target.value < 1 ) {
        itemsArr[indexSelectedItem].quantity = 1
         setCartArr(itemsArr)
          let totalPriceValue = itemsArr.reduce(function(prev, cur) {
            return prev + (cur.quantity * cur.price)
          },0)
          setTotalPrice(totalPriceValue)
          let totalQuantity = itemsArr.reduce(function(prev, cur) {
            return prev + cur.quantity
          },0)
          setCartQuantity(totalQuantity)
     } else if (e.target.value >= 0) {
          itemsArr[indexSelectedItem].quantity = parseInt(e.target.value);
          setCartArr(itemsArr)
          setChangeCart(true)
          let totalPriceValueIf = itemsArr.reduce(function(prev, cur) {
          return prev + (cur.quantity * cur.price)
      },0)
          setTotalPrice(totalPriceValueIf)
          let totalQuantityIf = itemsArr.reduce(function(prev, cur) {
          return prev + cur.quantity
      },0)
          setCartQuantity(totalQuantityIf)
    }

   }


   useEffect(() => {
       if(changeCart) {
        setChangeCart(false)
       }
  
   },  [changeCart])


    return (
        <div className="containerItemsCart">
            <div className="indicContainer">
            <div className="cardCheck">Item</div> 
            <div className="cardCheck">Price</div>
            <div className="cardCheck">Quantity</div>
            <div className="cardCheck">Total</div>
            </div>
        {cartArr.map(item => {
           if(item.quantity > 0) { 
           return <div className="wrapItemCart">
                <div className="itemNameImg">
                <img className="cartImgItem" src={item.img} alt="imgItem"></img> 
                <div >{item.name} </div>
                </div>
                <div className="cardCheck">{item.price} $ </div>
                <div className="cardCheck">
                <div className="quantityCart">
                <button id={item.id} onClick={(e) => decrementQuantity(e)} className="incrDecr">-</button>
                <input className="inputQuantity" id={item.id} value={item.quantity || 0} onChange={(e) => handle(e)}/>
                <button id={item.id} onClick={(e) => incrementQuantity(e)} className="incrDecr">+</button>
                <button id={item.id} className="btnRemove" onClick={(e) => removeItem(e)}>Remove</button>
                </div>
                </div>
                <div className="cardCheck">{parseInt(item.price)*parseInt(item.quantity)} $</div>
                
                </div>
                
            }})}
             <div className="checkout">
                <div>Total cart price : {totalPrice} $</div> 
                 </div>
                 <div className="btnCheckoutContainer">
                 <button className="checkoutBtnShop">Continue shopping</button>
                     <button className="checkoutBtn">Checkout</button>
                 </div>
         </div>
        
        )
}



export default Cart