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
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => {
        setProducts(response);
      })}
  }, [])

  useEffect(()=>{
    const uniqArray = [... new Set (products.map(product=>product.category))]
    setCategory(uniqArray)
    setSelectedCategory(uniqArray)
  },[products])
  
  return (
    <>
        <Header cart={cart} setCart={setCart}/>
        <main>
          <Outlet context={[products, setProducts, category, selectedCategory, setSelectedCategory, cart, setCart ]}/>
        </main>
        <Footer />
    </>
  )
}

export default App
