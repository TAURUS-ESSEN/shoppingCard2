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
        <header className="flex items-center justify-between gap-4">

            <div className="min-w-[60px] md:min-w-[80px] py-2  ">
                <Link to='/' className="flex"><img src="/logo.webp" width="100" height="100"/></Link>
            </div>
            <input type="checkbox" id="menu-toggler" />
            <nav className="w-full "> 
                <ul className=" flex w-full justify-evenly items-center gap-8 text-base md:text-2xl font-medium text-primary">
                    <Link to='home' className={location.pathname==='/' || location.pathname==='/home' ? 'active' : ''}>Home</Link>
                    <NavLink to='shop' className={({isActive}) => (isActive? `active` : '')}>Shop</NavLink>
                    <NavLink to='about' className={({isActive}) => (isActive? `active` : '')}>Über uns</NavLink>
                    <NavLink to='contacts' className={({isActive}) => (isActive? `active` : '')}>Kontakte</NavLink>
                </ul>
            </nav>
            <input 
                type="text" 
                placeholder="Produkt suchen" 
                onChange={(e)=>searchProduct(e)} 
                value={search} 
                className="search1 border-2 border-secondary rounded-lg p-2 max-w-[180px] md:min-w-[350px]"
            />
            <label for="menu-toggler" role="button" tabindex="0">
                <span className="open text-secondary">☰ </span>
                <span className="close text-secondary border rounded">☰</span>
            </label>
            
            <div className=" hidden md:flex pl-6 ">
                <Link to='cart' className="flex items-center">
                    <i className="fa-solid fa-bag-shopping fa-2xl relative" style={{color: '#7a5230'}}></i>
                    <span className="relative -left-4.5 top-1 text-white w-10">{cart.length}</span>
                </Link>
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