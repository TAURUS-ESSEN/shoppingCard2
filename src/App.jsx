import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartMobile from './components/Cart/CartMobile'
import Toast from './components/Toast/Toast';
// import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [toasts, setToasts] = useState([]);

  const [cart, setCart] = useState(() => {
      try { return JSON.parse(localStorage.getItem('cart')) ?? []; }
      catch { return []; }
    });

useEffect(() => {
    try { localStorage.setItem('cart', JSON.stringify(cart)); }
    catch {}
  }, [cart]);

  useEffect(()=>{
    if (products.length === 0) {
      fetch('https://68f4a5d6b16eb6f468351fd2.mockapi.io/api/ShoppingCartTaurusAusEssen/books')
      .then(response => response.json())
      .then(response => {
        setProducts(response);
      })}
  }, [products.length])

  useEffect(()=>{
    const uniqArray = [... new Set (products.map(product=>product.category))]
    setCategory(uniqArray)
    setSelectedCategory(uniqArray)
  },[products])

  return (
    <div className='wrapper max-w-300 m-auto px-4 border border-gray-300 shadow-soft'>
        <Toast toasts={toasts} setToasts={setToasts}/>
        <Header cart={cart} setCart={setCart} products={products}/>
        <main>
          <Outlet context={{products, setProducts, category, selectedCategory, setSelectedCategory, cart, setCart, toasts, setToasts} }/>
        </main>
        {window.innerWidth <= 768 && (
          <CartMobile cart={cart} />
        )}
        <Footer />
    </div>
  )
}

export default App
