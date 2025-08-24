import { useEffect, useState } from 'react';
import styles from './cart.module.css';
import { useOutletContext, Link } from "react-router-dom"

export default function Cart() {
  const {products, cart, setCart}  = useOutletContext();
  const [cartQ, setCartQ] = useState([])
  let sumBeforeShipping = 0;
  let total = 0;

  useEffect(()=> {
    setCartQ(prev => {
      const prevQty = new Map(prev.map(o => [o.id, o.qty]));
      const ids = [...new Set(cart)]; 
      return ids.map(id => ({ id, qty: prevQty.get(id) ?? 1 }));
    });
  },[cart]) 

  function deleteItem(id) {
    setCart(prev=>prev.filter(value=>value!==id))
  }

  function inc(id) {
    setCartQ(q => q.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  }
  
  function dec(id) {
    setCartQ(q => q.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item));
  }

  for (const cartItem of cartQ) {
    const productIdentifier = cartItem.id;     
    const productQuantity  = cartItem.qty;

    const product = products.find(productItem => productItem.id === productIdentifier);
    if (!product) continue;

    const productLineSum = product.price * productQuantity;
    sumBeforeShipping = sumBeforeShipping + productLineSum;
  }

  let shippingCost;
  if (sumBeforeShipping >= 100) {
    shippingCost = 0;
  } else {
    shippingCost = 25;
  }

  total=sumBeforeShipping+shippingCost 

  return (
    <>
        <div className={styles.cartHeader}>Shopping Cart</div>
      {cart.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.items}>
            {cartQ.map(({ id, qty }) => {
              const product = products.find(p => p.id === id);
              if (!product) return null;
              return (
                <div className={styles.item} key={id}>
                  <Link to={`/shop/product/${product.id}`}>
                    <div className={styles.productInfo}>
                      <div className={styles.productImage}><img src={product.image} alt={product.title} /></div>
                      <div className={styles.productTitle}>{product.title}</div>
                    </div>
                  </Link>
                  <div className={styles.buttons}>
                    <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
                    <div className={styles.qtyBlock}>
                      <button onClick={() => dec(id)} className={styles.buttonQ}>-</button>
                      <span className={styles.qty}>{qty}</span>
                      <button onClick={() => inc(id)} className={styles.buttonQ}>+</button>
                    </div>
                    <div>
                      <button onClick={() => deleteItem(id)} className={styles.deleteItem}>
                        <i className="fa-solid fa-trash-can fa-lg" aria-hidden="true"></i>
              
                        <span className="sr-only">Удалить</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.total}>
            <div className={styles.totalFields}>
              <span>Subtotal:</span> <span> ${sumBeforeShipping.toFixed(2)}</span>
            </div>
            <div className={styles.totalFields}>
              <span>Shipping*:</span><span> ${shippingCost.toFixed(2)}</span>
            </div>
            <div className={styles.totalSumme}>
              <span>Total:</span><span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.totalText}>*For orders over $100, shipping is free.</div>
          </div>
      </div>
      ) : (<div className={styles.emptyCart}><h2>Cart is empty</h2></div>)
    }
    </>
  )
}