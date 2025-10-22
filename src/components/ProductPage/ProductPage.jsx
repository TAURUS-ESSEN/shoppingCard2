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
        <section className="mt-4">
        <div className={styles.container}>
            <div className="card min-w-[270px] rounded-xl shadow">
                <img src={`/library/${product.image}`} alt={product.title} className="rounded-lg"/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}><h2>{product.title}</h2></div>
                {/* <div className={styles.price}>${product.price.toFixed(2)}</div> */}
                <div className="text-lg border-b-1 ">Category:<span className="font-semibold text-secondary"> {product.category}</span></div>
                <div className="font-bold text-4xl text-secondary">${product.price}</div>
                <div className="bg-tertiary p-2 rounded-lg text-lg ">{product.description}</div>
                <div>
                    {cart.includes(product.id) ? 
                    (<button onClick={()=>removeFromCart(product.id)} className="btn">Remove from Cart</button>) : 
                    (<button onClick={()=>addToCart(product.id)} className="btn">In den Warenkorb</button>)}
                </div>

            </div>
        </div>
            

        </section>
    )
}