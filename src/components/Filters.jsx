import React from 'react'
import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import { Pages } from '../pages'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      ></FormInput>
      {/* CATEGORIES */}
      <FormSelect
        label="select categories"
        name="category"
        list={meta.categories}
        size={'select-sm'}
        defaultValue={category}
      ></FormSelect>
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size={'select-sm'}
        defaultValue={company}
      ></FormSelect>
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size={'select-sm'}
        defaultValue={order}
      ></FormSelect>
      {/* PRICE RANGE */}
      <FormRange
        label="select price"
        name="price"
        size="range-md"
        price={price}
      ></FormRange>
      {/* FREE SHIPPING */}
      <FormCheckbox
        label={'Free Shipping'}
        name="shipping"
        defaultChecked={shipping}
      ></FormCheckbox>
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to={Pages.Products} className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}

export default Filters
