import React from 'react'

import { useLoaderData } from 'react-router-dom'
import { formatPrice, customFetch } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Pages } from '.'
import { addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const singleProductQuery = (id) => ({
  queryKey: ['single', id],
  queryFn: () => customFetch(`/products/${id}`),
})

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    )
    return { product: response.data.data }
  }

const amounts = [1, 2, 3, 4, 5, 6, 7, 8]

const SingleProduct = () => {
  const { product } = useLoaderData()
  console.log(product)
  const { image, title, price, description, colors, company } =
    product.attributes
  const dollarsAmount = formatPrice(price)

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  // Redux
  const cartProduct = {
    cartId: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  }
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={Pages.HomeLayout}>Home</Link>
          </li>
          <li>
            <Link to={Pages.Products}>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize text-neutral-content">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs mt-4">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize text-neutral-content">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            >
              {amounts.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          {/* CART BUTTON */}
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
