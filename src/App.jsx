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
import { loader as landingLoader } from './pages/Landing'
import { loader as productLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'

const router = createBrowserRouter([
  {
    path: Pages.HomeLayout,
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
      {
        path: Pages.Products,
        loader: productsLoader,
        element: <Products />,
      },
      {
        path: Pages.SingleProduct,
        loader: productLoader,
        element: <SingleProduct />,
        errorElement: ErrorElement,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: Pages.About, element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: Pages.Login,
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: Pages.Register,
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
