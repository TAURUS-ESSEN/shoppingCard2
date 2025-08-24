import { Link, useLocation, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header({cart, products}) {
    const [search, setSearch] = useState('');
    const location = useLocation();
    function searchProduct(e) {
        setSearch(e.target.value)
    }

    return (
        <>
        <header>
            <div className="logo">
                <Link to='/'>Click&Buy</Link>
            </div>
            <div className="block">
                <nav>
                    <Link to='home' className={location.pathname==='/' || location.pathname==='/home' ? 'active' : ''}>Home</Link>
                    <NavLink to='shop' className={({isActive}) => (isActive? `active` : '')}>Shop</NavLink>
                </nav>
                <div>
                    <input type="text" placeholder="Search a product" onChange={(e)=>searchProduct(e)} value={search} className="search"/>
                </div>
                <div className="cart">
                    <Link to='cart'>
                        <i className="fa-solid fa-cart-shopping fa-xl cartIcon" style={{color: '#030386'}}></i>
                        {cart.length}
                    </Link>
                </div>
            </div>
        </header>
            <div className="searchResults"> 
                {search!=='' && (
                    products.map(product=>{
                    if (search.length >= 2 && product.title.match(new RegExp(search, "i"))) {
                        return (
                            <div>
                                <Link to={`shop/product/${product.id}`} state={{ product }}  onClick={() => setSearch('')}>
                                    {product.title} 
                                </Link>
                            </div>
                        ) 
                    }
                    })
                )}
            </div>
        </>
    )
}