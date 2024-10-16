import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCardProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin/index.jsx'
import NavBar from '../../Components/NavBar/index.jsx'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/index.jsx'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/mclothing', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/jewelery', element: <Home />},
    { path: '/wclothing', element: <Home />},
    { path: '/others', element: <Home />},
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return ( <>
  <ShoppingCardProvider>
    <BrowserRouter>
    <AppRoutes />
    <NavBar />
    <CheckoutSideMenu />
    </BrowserRouter>
  </ShoppingCardProvider>
  </>
  )
}

export default App
