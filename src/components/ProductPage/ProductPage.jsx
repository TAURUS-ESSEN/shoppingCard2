import { useLocation, useParams } from "react-router-dom";
import { useOutletContext, Link } from "react-router-dom";
import styles from "./product.module.css"

export default function ProductPage() {
    const { productId } = useParams();
    const {products,cart, setCart, toasts, setToasts} =  useOutletContext();
    const location = useLocation();
    let product = location.state?.product;

    if (!product) {
        product = products.find(p => String(p.id) === String(productId));
    }

    function addToCart(product) {
        setCart(prev=>[...prev,product.id])
         setToasts(prev=>([...prev, {message: (
                <div className='addToast flex gap-1 items-center justify-center'>
                    <span className='w-full'><img className="rounded" src={`/library/${product.image}`} width="70" height="70" /></span>
                    <span className='text-center'>{product.title.slice(0,20)}.. wurde hinzugefügt</span>
                </div>
                )
                }]));
    }

    function removeFromCart(product) {
        setCart(prev=>prev.filter(v=>v!==product.id))
        setToasts(prev=>([...prev, {message: (
        <div className='removeToast flex gap-1 items-center justify-center'>
            <span className='w-full'><img className="rounded" src={`/library/${product.image}`} width="70" height="70" /></span>
            <span className='text-center'>{product.title.slice(0,20)}.. wurde entfernt</span>
        </div>
        )
        }]));
    }

    if (!product) {
        return <div>Product not found or still loading...</div>;
    }

    return (
        <section className="mt-4">
        <div className="flex flex-col md:flex-row justify-center gap-4 px-2">
            <div className="card max-w-[250px] md:min-w-[270px] rounded-xl shadow fade-up-soft">
                <img src={`/library/${product.image}`} alt={product.title} className="rounded-lg"/>
            </div>
            <div className="fade-up-soft flex flex-col gap-2">
                <div className=""><h2>{product.title}</h2></div>
                {/* <div className={styles.price}>${product.price.toFixed(2)}</div> */}
                <div className="text-lg ">von:<span className="font-medium md:font-semibold text-secondary"> {product.autor}</span></div>
                <div className="text-lg border-b border-promo ">Category:<span className="font-semibold text-secondary"> {product.category}</span></div>
                <div className="font-bold text-2xl md:text-4xl text-secondary">${product.price}</div>
                <div className="bg-tertiary p-2 rounded-lg text-lg ">{product.description}</div>
                <div>
                    {cart.includes(product.id) ? 
                    (<button onClick={()=>removeFromCart(product)} className="btn">
                        <span className="max-w-30 text-left">Entfernen</span>
                        <span><img  className="f-wull" src="/remove-white.webp" width="40"/></span>
                    </button>) : 
                    (<button onClick={()=>addToCart(product)} className="btn ">
                        <span className="max-w-30 text-left">In den Warenkorb </span>
                        <span><img  className="f-wull" src="/add-white.webp" width="40"/></span>
                    </button>)}
                </div>

            </div>
        </div>
            

        </section>
    )
}