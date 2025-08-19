import { useLocation, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
    // const { id } = useParams();
    const [, , , , , cart, setCart] =  useOutletContext();
    const location = useLocation();
    const product = location.state?.product;

    function addToCart(id) {
        setCart(prev=>[...prev,id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(v=>v!=id))
    }

    return (
        <>
            {product.title}
            <img src={product.image} />
            {product.price}
            {product.description}
            {cart.includes(product.id) ? (<button onClick={()=>removeFromCart(product.id)}>removeFromCart</button>) : (<button onClick={()=>addToCart(product.id)}>add to cart</button>)}
            

        </>
    )
}