import styles from './liste.module.css';
import { Link } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

export default function Liste() {
    const [products, , category, selectedCategory, setSelectedCategory, cart, setCart] =  useOutletContext();
    function addToCart(id) {
        setCart(prev=>[...prev, id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(value=>value!==id))
    }
    
    return (
        <>
            <div className={styles.liste}>
                {products.map(product=>{ 
                    if (selectedCategory.includes(product.category)) {
                    return (
                        <div className={styles.card}>
                            <Link to={`product/${product.id}`} className={styles.link} state={{ product }}>
                                <div><img src={product.image} width='50px'/></div>
                                <div>{product.title}</div>
                            </Link>
                                <div>{product.price}</div>
                                {cart.includes(product.id) ? (
                                    <button onClick={()=>removeFromCart(product.id)}>Remove from shopping cart</button>
                                ) : (<button onClick={()=>addToCart(product.id)}>Add to Cart</button>)}
                        </div>
                    )
                }
                })}
            </div>
        </>
    )
}