import { useEffect, useState } from 'react';
import styles from './cart.module.css';
import { useOutletContext, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  const {products, cart, setCart, toasts, setToasts}  = useOutletContext();
  const [cartQ, setCartQ] = useState(() => {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('cart_qty')) || {}; } catch {}
    const ids = [...new Set(cart)];
    return ids.map(id => ({ id, qty: Math.max(1, Number(saved[id]) || 1) }));
  });

  
  let sumBeforeShipping = 0;
  let total = 0;

  useEffect(()=> {
    setCartQ(prev => {
      const prevQty = new Map(prev.map(o => [o.id, o.qty]));
      const ids = [...new Set(cart)]; 
      return ids.map(id => ({ id, qty: prevQty.get(id) ?? 1 }));
    });
  },[cart]);

  useEffect(() => {
    try {
      const ids = new Set(cart);
      const obj = Object.fromEntries(
        cartQ
          .filter(({id}) => ids.has(id))
          .map(({id, qty}) => [id, qty])
      );
      localStorage.setItem('cart_qty', JSON.stringify(obj));
    } catch {}
  }, [cartQ, cart]);

  function deleteItem(product) {
    setCart(prev=>prev.filter(value=>value!==product.id));
    setCartQ(q=>q.filter(item=>item.id!==product.id));
    setToasts(prev=>([...prev, {message: (
      <Link to={`shop/product/${product.id}`} className="text-white" state={{ product }}>
        <div className='removeToast flex gap-1 items-center justify-center'>
          <span className='w-full'><img className="rounded" src={`/library/${product.image}`} width="70" height="70" /></span>
          <span className='text-center'>{product.title.slice(0,20)}.. wurde entfernt</span>
        </div>
      </Link>
    )
    }]));  
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
  if (sumBeforeShipping >= 50) {
    shippingCost = 0;
  } else {
    shippingCost = 25;
  }

  total=sumBeforeShipping+shippingCost 

  return (
    <section>
        <h2 className='text-center' id="top">Warenkorb</h2>
      {cart.length !== 0 ? (
        <div className="flex flex-col md:flex-row gap-4 text-xl ">
          <div className='order-2 md:order-1 flex flex-col w-full'>
            {cartQ.map(({ id, qty }) => {
              const product = products.find(p => p.id === id);
              if (!product) return null;
              return (
                <div className="flex md:items-center gap-4 w-full my-1 p-2 border border-[#03038635] rounded-md" key={id}>
                  <Link to={`/shop/product/${product.id}`}>
                      <div className="card max-w-[150px]">
                        <img src={`/library/${product.image}`} alt={product.title} />
                      </div>
                  </Link>
                  <div className= "flex md:items-center flex-col md:flex-row w-full justify-between ">
                      <div >
                        <div className="text-secondary max-w-100 leading-none md:leading-[1.4]">{product.title}</div>
                        <div className='hidden md:block'>von <span className="text-secondary">{product.autor}</span></div>
                      </div>
                    {/* <div className={styles.productPrice}>${product.price.toFixed(2)}</div> */}
                    <div className={styles.productPrice}>{product.price} €</div>
                    <div className='flex items-center justify-between md:gap-4'>
                      <div className=" border border-primary  rounded-sm">
                        <button onClick={() => dec(id)} className="bg-primary px-3 py-1   text-white hover:bg-secondary">-</button>
                        <span className="px-3">{qty}</span>
                        <button onClick={() => inc(id)} className="bg-primary px-3 py-1   text-white hover:bg-secondary">+</button>
                      </div>
                      <div>
                        <button onClick={() => deleteItem(product)} className={styles.deleteItem}>
                          <FontAwesomeIcon icon={faCircleXmark} className="text-secondary fa-2xl" aria-hidden="true"/>
                          <span className="sr-only">Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-1 md:order-2 min-w-[300px] max-h-[300px] bg-primary text-white p-4 flex flex-col justify-center rounded-xl">
            <div className={styles.totalFields}>
              <span>Zwischensumme:</span> <span> {sumBeforeShipping.toFixed(2)} €</span>
            </div>
            <div className={styles.totalFields}>
              <span>Versant*:</span><span> {shippingCost.toFixed(2)} €</span>
            </div>
            <div className={styles.totalSumme}>
              <span>Summe:</span><span>{total.toFixed(2)} €</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className="my-4 text-base">*Ab 50 € versandkostenfrei</div>
              <div><button className="bg-[#F6EDE1] text-primary rounded-lg px-6 py-2 ">Zur Kasse gehen</button></div>
            </div>
          </div>
      </div>
      ) : (<div className={styles.emptyCart}><h2>Warenkorb ist leer</h2></div>)
    }
    </section>
  )
}