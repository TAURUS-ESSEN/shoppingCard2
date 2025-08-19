import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Shop from './Shop.jsx'
import Home from './Home.jsx';
import Cart from './components/Cart/Cart';
import ProductPage from './components/ProductPage/ProductPage';

const router = createBrowserRouter([
  { path: '/', 
    element: <App />, 
    children: [
      {index: true, element : <Home />},
      {path: 'shop', element: <Shop />}, 
      {path: 'shop/product/:id', element: <ProductPage />}, 
      {path: 'home', element: <Home />},
      {path: 'cart', element: <Cart />}
    ]},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
