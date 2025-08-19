import { Link } from "react-router-dom"
// import Cart from "./Cart/Cart"
export default function Header({cart, setCart}) {
    return (
        <>
        <header>
            <div className="logo">
                <Link to='/'>ShopName</Link>
            </div>
            <div className="block">
                <nav>
                    <Link to='home'>Home </Link>
                    <Link to='shop'>Shop</Link>
                </nav>
                <div>
                    <Link to='cart'>
                        <i className="fa-solid fa-cart-shopping fa-xl" style={{color: '#ffa200'}}></i>
                        {cart.length}
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}