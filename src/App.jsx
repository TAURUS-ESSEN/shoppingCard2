import { useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [cart, setCart] = useState([]);

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
    <div className='wrapper'>
        <Header cart={cart} setCart={setCart} products={products}/>
        <main>
          <Outlet context={{products, setProducts, category, selectedCategory, setSelectedCategory, cart, setCart} }/>
        </main>
        <Footer />
    </div>
  )
}

export default App
