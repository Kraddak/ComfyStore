import React from 'react'
import { Pages } from '.'
import { toast } from 'react-toastify'
import { redirect, useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from '../components'

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  }
}

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user
    if (!user) {
      toast.warn('You must be logged in to view the orders')
      return redirect(Pages.Login)
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user),
      )
      return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)

      if ([401, 403].includes(error?.response?.status))
        return redirect(Pages.Login) // auth token expired
      return null
    }
  }

const Orders = () => {
  const { meta } = useLoaderData()
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order"></SectionTitle>
  }

  return (
    <>
      <SectionTitle text="Your Orders"></SectionTitle>
      <OrdersList></OrdersList>
      <ComplexPaginationContainer></ComplexPaginationContainer>
    </>
  )
}

export default Orders
