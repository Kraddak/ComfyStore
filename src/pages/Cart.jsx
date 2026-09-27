import React from 'react'
import { CartItemsList, SectionTitle, CartTotals } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Pages } from '.'

const Cart = () => {
  // temporary
  const user = useSelector((state) => state.userState.user)
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  //

  if (!numItemsInCart)
    return <SectionTitle text="Your cart is empty"></SectionTitle>

  return (
    <>
      <SectionTitle text="Shopping Cart"></SectionTitle>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals></CartTotals>
          {user ? (
            <Link
              to={Pages.Checkout}
              className="btn btn-primary btn-block mt-8"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link to={Pages.Login} className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
