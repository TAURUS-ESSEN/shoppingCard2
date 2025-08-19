import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header({cart, products}) {
    const [search, setSearch] = useState('');

    function searchProduct(e) {
        setSearch(e.target.value)
    }

    return (
        <>
        <header>
            <div className="logo">
                <Link to='/'>ShopName</Link>
            </div>
            <div className="block">
                <nav>
                    <Link to='home'>Home</Link>
                    <Link to='shop'>Shop</Link>
                </nav>
                <div>
                    <input type="text" placeholder="Search a product" onChange={(e)=>searchProduct(e)} value={search} className="search"/>
                </div>
                <div className="cart">
                    <Link to='cart'>
                        <i className="fa-solid fa-cart-shopping fa-xl" style={{color: '#030386'}}></i>
                        {cart.length}
                    </Link>
                </div>
            </div>
        </header>
            <div>{search}
                {search!=='' && (
                    products.map(product=>{
                    if (product.title.match(new RegExp(search, "i"))) {
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