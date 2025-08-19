import { useLocation, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
    const { id } = useParams();
    console.log('id=',id)
    const [products, , , , , cart, setCart] =  useOutletContext();
    const location = useLocation();
    let product = location.state?.product;

     if (!product) {
    product = products.find(p => String(p.id) === String(id));
  }

    function addToCart(id) {
        setCart(prev=>[...prev,id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(v=>v!=id))
    }

     if (!product) {
    return <div>Product not found or still loading...</div>;
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