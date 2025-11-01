import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header({cart, products}) {
    const [search, setSearch] = useState('');
    function searchProduct(e) {
        setSearch(e.target.value)
    }

    return (
        <>
        <header className="mx-[calc(-1*var(--wrap-pad))] w-[calc(100%+2*var(--wrap-pad))] flex items-center justify-around gap-4 px-4 shadow-soft ">

            <div className="max-w-[60px] md:min-w-20 py-2 ">
                <Link to='/' className="flex shake" aria-label="Startseite">
                    <img src="/logo.webp" width="100" height="100" alt="Bookworm Logo" />
                </Link>
            </div>
            <input type="checkbox" id="menu-toggler" />
            <nav className="md:w-full" role="navigation" aria-label="Hauptnavigation">
            <ul className="flex w-full justify-evenly items-center gap-8 text-lg md:text-2xl font-medium text-primary">
                <li><NavLink to="home" className={({isActive}) => (location.pathname==='/' || isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to="shop" className={({isActive}) => (isActive ? 'active' : '')}>Shop</NavLink></li>
                <li><NavLink to="about" className={({isActive}) => (isActive ? 'active' : '')}>Über uns</NavLink></li>
                <li><NavLink to="contacts" className={({isActive}) => (isActive ? 'active' : '')}>Kontakte</NavLink></li>
            </ul>
            </nav>
            <input 
                type="text" 
                placeholder="Produkt suchen" 
                onChange={(e)=>searchProduct(e)} 
                value={search} 
                className="min-w-45 md:min-w-85 px-4 border border-secondary rounded-lg shadow-medium "
            />
            <label for="menu-toggler" role="button" tabindex="0">
                <span className="open text-secondary">☰ </span>
                <span className="close text-secondary border rounded">☰</span>
            </label>
            
            <div className="hidden lg:flex min-h-11 px-2 lg:px-6 hover:scale-105 duration-300 ">
                <Link to='cart' className="flex items-center relative" aria-label={`Warenkorb öffnen (${cart.length} Artikel)`}>
                    <span>
                        <img src="/cart.webp" width="70" alt="" aria-hidden="true"/>
                    </span>
                    <span className="absolute top-3.5 flex justify-center px-3.5 text-white">
                        {cart.length}
                    </span>
                </Link>
            </div>
        </header>
            <div className="searchResults"> 
                {search!=='' && (
                    products.map(product=>{
                    if (search.length >= 3 && product.title.match(new RegExp(search, "i"))) {
                        return (
                            <div className="odd:bg-gray-100 hover:bg-tertiary p-1 ">
                                <Link to={`shop/product/${product.id}`} state={{ product }} onClick={() => setSearch('')}>
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