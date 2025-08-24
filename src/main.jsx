import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Shop from './Shop.jsx';
import Home from './Home.jsx';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/Error';
import ProductPage from './components/ProductPage/ProductPage';

const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {index: true, element : <Home />},
      {path: 'shop', element: <Shop />}, 
      {path: 'shop/product/:productId', element: <ProductPage />}, 
      {path: "home", element: <Navigate to="/" replace/> },  
      {path: 'cart', element: <Cart />}
    ]},
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
