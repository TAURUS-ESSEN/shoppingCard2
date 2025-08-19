import { useEffect, useState } from 'react';
import styles from './cart.module.css';
import { useOutletContext } from "react-router-dom"
export default function Cart() {
    const [products, setProducts, category, selectedCategory, setSelectedCategory, cart, setCart ] = useOutletContext();
    const [cartQ, setCartQ] = useState([])
    let total = 0;
    useEffect(()=> {
    setCartQ(prev => {
        const prevQty = new Map(prev.map(o => [o.id, o.qty]));
        const ids = [...new Set(cart)]; // на случай дублей
        return ids.map(id => ({ id, qty: prevQty.get(id) ?? 1 }));
  });
    },[cart]) 

    function deleteItem(id) {
        setCart(prev=>prev.filter(value=>value!==id))
    }

    function inc(id) {
  setCartQ(q => q.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it));
}
function dec(id) {
  setCartQ(q => q.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it));
}

    return (
        <>
            <div>  
                {cart.map(value => {
                return value
            })}
                </div> 
                {cart.length !== 0 ? (
                <div className={styles.container}>
           <div className={styles.items}>
  {cartQ.map(({ id, qty }) => {
    const product = products.find(p => p.id === id);
    total+=product.price*qty
    if (!product) return null;
    return (
      <div className={styles.item} key={id}>
        <div><img src={product.image} width="50" alt={product.title} /></div>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <div>
          <button onClick={() => dec(id)}>-</button>
          {qty}
          <button onClick={() => inc(id)}>+</button>
        </div>
        <div>
          <button onClick={() => deleteItem(id)}>
            <i className="fa-solid fa-trash-can" aria-hidden="true"></i>
            <span className="sr-only">Удалить</span>
          </button>
        </div>
      </div>
    );
  })}
</div>

                    <div className={styles.total}>
                        {/* totalPrice: {cartQ.map(({ id, qty }) => {} */} {total}
                    </div>
                </div>
          ) : (<div>Cart is empty</div>)
        
        }

        </>
    )
}