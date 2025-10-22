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
        <div className="flex flex-col md:flex-row justify-center gap-4 px-2 bg-amber-300">
            <div className="card min-w-[270px] rounded-xl shadow fade-up-soft">
                <img src={`/library/${product.image}`} alt={product.title} className="rounded-lg"/>
            </div>
            <div className="fade-up-soft flex flex-col gap-2">
                <div className=""><h2>{product.title}</h2></div>
                {/* <div className={styles.price}>${product.price.toFixed(2)}</div> */}
                <div className="text-lg ">von:<span className="font-medium md:font-semibold text-secondary"> {product.autor}</span></div>
                <div className="text-lg border-b-1 border-promo ">Category:<span className="font-semibold text-secondary"> {product.category}</span></div>
                <div className="font-bold text-2xl md:text-4xl text-secondary">${product.price}</div>
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