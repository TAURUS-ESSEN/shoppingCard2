import { useOutletContext } from "react-router-dom"
export default function Cart() {
    const [products, setProducts, category, selectedCategory, setSelectedCategory, cart, setCart ] = useOutletContext();
    return (
        <>
             
            {cart.map(value => {
                return value
            })}
        </>
    )
}