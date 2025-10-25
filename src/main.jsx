import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Shop from './Shop.jsx';
import Home from './Home.jsx';
import Legal from './components/Legal.jsx';
import Contacts from './components/Contacts.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/Error';
import Danke from './components/Danke';
import ProductPage from './components/ProductPage/ProductPage';

const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {index: true, element : <Home />},
      {path: 'shop', element: <Shop />}, 
      {path: 'Danke', element: <Danke />}, 
      {path: 'shop/product/:productId', element: <ProductPage />}, 
      {path: "home", element: <Navigate to="/" replace/> },  
      {path: "about", element: <About /> },  
      {path: 'cart', element: <Cart />},
      {path: 'Legal', element: <Legal />},
      {path: 'contacts', element: <Contacts />}
    ]},
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
