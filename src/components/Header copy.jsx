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
        <header className="flex items-center ">
            <input type="checkbox" id="menu-toggler" />
            <label for="menu-toggler" role="button" tabindex="0">
                <span class="open">☰ </span>
                <span class="close">☰</span>
            </label>
            <div className="order-0 max-w-[100px] py-2  ">
                <Link to='/' className="flex"><img src="/logo.webp" width="100" height="100"/></Link>
            </div>
            <div className="flex items-center w-full justify-between">
                <nav> 
                    <ul className="order-2 md:order-1 flex w-full justify-evenly items-center gap-8 text-2xl font-medium text-primary">
                        <Link to='home' className={location.pathname==='/' || location.pathname==='/home' ? 'active' : ''}>Home</Link>
                        <NavLink to='shop' className={({isActive}) => (isActive? `active` : '')}>Shop</NavLink>
                        <NavLink to='about' className={({isActive}) => (isActive? `active` : '')}>Über uns</NavLink>
                        <NavLink to='contacts' className={({isActive}) => (isActive? `active` : '')}>Kontakte</NavLink>
                    </ul>
                </nav>
                <div className="order-1 md:order-2 ">
                    <input 
                        type="text" 
                        placeholder="Produkt suchen" 
                        onChange={(e)=>searchProduct(e)} 
                        value={search} 
                        className="search1 border-2 border-secondary rounded-lg p-2 md:min-w-[350px]"
                    />
                </div>
                <div className="order-3  flex pl-6 hidden md:block ">
                    <Link to='cart' className="flex items-center">
                        <i className="fa-solid fa-bag-shopping fa-2xl relative" style={{color: '#7a5230'}}></i>
                        <span className="relative -left-4.5 top-1 text-white w-10">{cart.length}</span>
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