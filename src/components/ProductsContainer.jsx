import { useLoaderData } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const LIST = 'list'
const GRID = 'grid'

const ProductsContainer = () => {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total

  const [layout, setLayout] = useState(GRID)
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? `btn-primary text-primary-content`
        : `btn-ghost text-based-content`
    }`
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout(GRID)}
            className={setActiveStyles(GRID)}
          >
            <BsFillGridFill></BsFillGridFill>
          </button>
          <button
            onClick={() => setLayout(LIST)}
            className={setActiveStyles(LIST)}
          >
            <BsList></BsList>
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === GRID ? (
          <ProductsGrid></ProductsGrid>
        ) : (
          <ProductsList></ProductsList>
        )}
      </div>
    </>
  )
}

export default ProductsContainer

/*

        layout === GRID ? (
          <ProductsGrid></ProductsGrid>
        ) : (
          <ProductsList></ProductsList>
        )

*/
