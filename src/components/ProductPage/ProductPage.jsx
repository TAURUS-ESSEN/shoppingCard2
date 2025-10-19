import { useLocation, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import styles from "./product.module.css"

export default function ProductPage() {
    const { productId } = useParams();
    const {products,cart, setCart} =  useOutletContext();
    const location = useLocation();
    let product = location.state?.product;

    if (!product) {
        product = products.find(p => String(p.id) === String(productId));
    }

    function addToCart(id) {
        setCart(prev=>[...prev,id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(v=>v!==id))
    }

    if (!product) {
        return <div>Product not found or still loading...</div>;
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}><h2>{product.title}</h2></div>
                {/* <div className={styles.price}>${product.price.toFixed(2)}</div> */}
                <div className={styles.price}>${product.price}</div>
                <div className={styles.category}>Category:<strong> {product.category}</strong></div>
                <div className={styles.description}>{product.description}</div>
                <div>
                    {cart.includes(product.id) ? 
                    (<button onClick={()=>removeFromCart(product.id)} className={styles.cartButton}>Remove from Cart</button>) : 
                    (<button onClick={()=>addToCart(product.id)} className={styles.cartButton}>Add to Cart</button>)}
                </div>

            </div>
        </div>
            

        </>
    )
}