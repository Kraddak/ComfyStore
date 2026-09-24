import React from 'react'
import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import { Pages } from '../pages'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta } = useLoaderData()

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      ></FormInput>
      {/* CATEGORIES */}
      <FormSelect
        label="select categories"
        name="category"
        list={meta.categories}
        size={'select-sm'}
      ></FormSelect>
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size={'select-sm'}
      ></FormSelect>
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size={'select-sm'}
      ></FormSelect>
      {/* PRICE RANGE */}
      <FormRange label="select price" name="price" size="range-md"></FormRange>
      {/* FREE SHIPPING */}
      <FormCheckbox
        label={'Free Shipping'}
        defaultChecked={false}
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
