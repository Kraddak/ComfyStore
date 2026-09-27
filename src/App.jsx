import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Error,
  Pages,
  Landing,
  About,
  Cart,
  Checkout,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages'
import { ErrorElement } from './components'
// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as productLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'
import { loader as checkoutLoader } from './pages/Checkout'
import { loader as ordersLoader } from './pages/Orders'
// actions
import { action as actionRegister } from './pages/Register'
import { action as actionLogin } from './pages/Login'
import { action as actionCheckout } from './components/CheckoutForm'
// store
import { store } from './store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: Pages.HomeLayout,
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: Pages.Products,
        loader: productsLoader(queryClient),
        element: <Products />,
      },
      {
        path: Pages.SingleProduct,
        loader: productLoader(queryClient),
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: Pages.About, element: <About /> },
      {
        path: 'checkout',
        loader: checkoutLoader(store),
        action: actionCheckout(store, queryClient),
        element: <Checkout />,
      },
      {
        path: 'orders',
        loader: ordersLoader(store, queryClient),
        element: <Orders />,
      },
    ],
  },
  {
    path: Pages.Login,
    element: <Login />,
    action: actionLogin(store),
    errorElement: <Error />,
  },
  {
    path: Pages.Register,
    element: <Register />,
    action: actionRegister,
    errorElement: <Error />,
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
