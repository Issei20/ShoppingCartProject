import React from 'react'
import { Link } from "react-router-dom"
import logo from "./media/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({cartQuantity, setCartQuantity}) => {


    const icon = <FontAwesomeIcon icon={faShoppingCart}/>
    return (<div className="navBarContainer">
        <img src={logo} alt="logo"></img>
        <ul className="navBarUl">
        <Link to="/ShoppingCartProject" style={{ textDecoration: 'none'}}> <li className="navLi">Home</li> </Link> 
        <Link to="shop" style={{ textDecoration: 'none' }}> <li className="navLi">Shop</li> </Link> 
        <Link to='/shop/cart' style={{ color: "rgb(36, 197, 189)", textDecoration: "none"}}>  <div className="barCart">{icon} Cart ( {cartQuantity} ) </div> </Link>
        
        </ul>
    </div>)
}


export default NavBar