import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../pages'
import { useSelector } from 'react-redux'

const NavLinks = () => {
  const links = [
    { id: 1, url: Pages.HomeLayout, text: 'home' },
    { id: 2, url: Pages.About, text: 'about' },
    { id: 3, url: Pages.Products, text: 'products' },
    { id: 4, url: Pages.Cart, text: 'cart' },
    { id: 5, url: Pages.Checkout, text: 'checkout' },
    { id: 6, url: Pages.Orders, text: 'orders' },
  ]

  const user = useSelector((state) => state.userState.user)

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link
        if ((url === Pages.Checkout || url === Pages.Orders) && !user)
          return null
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}
export default NavLinks
