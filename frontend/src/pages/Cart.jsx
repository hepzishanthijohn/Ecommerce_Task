import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import Navbar from '../components/Navbar/Navbar'
import CategoryNav from '../components/CategoryNavbar/CategoryNav'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <CategoryNav/>
        <CartItems/>
    </div>
  )
}

export default Cart