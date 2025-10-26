import { useEffect, useRef, useState } from 'react';
import styles from './liste.module.css';
import { Link, useOutletContext } from 'react-router-dom';

export default function Liste() {
    const {products, selectedCategory, cart, setCart, toasts, setToasts} = useOutletContext();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const safeItemsPerPage = Math.max(1, itemsPerPage);
    const start = (currentPage - 1) * safeItemsPerPage;
    const end = start + safeItemsPerPage;
    const pageCount = Math.max(1, Math.ceil(filteredProducts.length / safeItemsPerPage));
    const tempArray = Array.from({length: pageCount}, (_, i) => i + 1);

    const [isMobile, setIsMobile] = useState(false);
    const [visible, setVisible] = useState(safeItemsPerPage);
    const loaderRef = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const onChange = () => setIsMobile(mq.matches);
        onChange();
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        const next = products.filter(p => selectedCategory.includes(p.category));
        setFilteredProducts(next);
        setCurrentPage(1);
        setVisible(safeItemsPerPage);
    }, [products, selectedCategory, safeItemsPerPage]);

    useEffect(() => {
        if (!isMobile) return;
        const el = loaderRef.current;
        if (!el) return;

        const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setVisible(v => Math.min(v + safeItemsPerPage, filteredProducts.length));
        }
        }, { rootMargin: '200px' });

        io.observe(el);
        return () => io.disconnect();
    }, [isMobile, safeItemsPerPage, filteredProducts.length]);

    function changePage(value) {
        setCurrentPage(value);
    }
    function changeItemsPerPage(e) {
        const val = Number(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(1);
        setVisible(val); 
    }
    function addToCart(product) { 
        setCart(prev => [...prev, product.id]);  
        setToasts(prev=>([...prev, {message: (
        <Link to={`shop/product/${product.id}`} className="text-white" state={{ product }}>
            <div className='addToast flex gap-1 items-center justify-center'>
                <span className='w-full'><img className="rounded" src={`/library/${product.image}`} width="70" height="70" /></span>
                <span className='text-center'>{product.title.slice(0,20)}.. wurde hinzugefügt</span>
            </div>
        </Link>
        )
        }]));
    }
    function removeFromCart(product) { 
        setCart(prev => prev.filter(v => v !== product.id)); 
        setToasts(prev=>([...prev, {message: (
        <Link to={`shop/product/${product.id}`} className="text-white" state={{ product }}>
        <div className='removeToast flex gap-1 items-center justify-center'>
            <span className='w-full'>
                <img className="rounded" src={`/library/${product.image}`} width="70" height="70" />
            </span>
            <span className='text-center'>{product.title.slice(0,20)}.. wurde entfernt</span>
        </div>
        </Link>
        )
        }]));
    
    }

    const productsToRender = isMobile
        ? filteredProducts.slice(0, visible)    
        : filteredProducts.slice(start, end);   

    return (
        <section>
        <div className="hidden md:block">
            <label htmlFor="select" className={styles.selector}>Produkte je Seite</label>
            <select id="select" className="border rounded p-1"
                    onChange={changeItemsPerPage} value={itemsPerPage} aria-label="Produkte pro Seite wählen">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value={Math.max(1, filteredProducts.length)}>All</option>
            </select>
        </div>

        <ul className="flex flex-wrap gap-3 md:gap-4 justify-center mt-2">
            {productsToRender.map(product => (
            <li className="card flex flex-col gap-2 max-w-40 md:max-w-[210px] mb-2 bg-promo fade-up-soft border-2 border-transparent hover:border-secondary transition-transform duration-400"
                key={product.id}>
                <Link 
                    to={`product/${product.id}`} 
                    className={styles.link} 
                    state={{ product }} 
                    aria-label={`Zum Produkt ${product.title}`}
                >
                    <img 
                        src={`/library/${product.image}`} 
                        alt={`Buchcover: ${product.title}`} 
                        className="rounded-lg" 
                    />
                </Link>
                <div className="flex justify-between items-center p-1 gap-4 w-full">
                    <div className="text-2xl">{product.price} €</div>
                    {cart.includes(product.id) ? (
                        <button 
                            type="button"
                            onClick={() => removeFromCart(product)} 
                            className="hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                            aria-label={`Aus dem Warenkorb entfernen: ${product.title}`}
                        >
                            <img src="minus.webp" width="40" height="40" alt="" aria-hidden="true" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => addToCart(product)} 
                            className="hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                            aria-label={`Zum Warenkorb hinzufügen: ${product.title}`}
                        >
                            <img src="add.webp" width="40" height="40" alt="" aria-hidden="true" />
                        </button>
                    )}
                </div>
            </li>
            ))}
        </ul>

        {!isMobile && itemsPerPage !== filteredProducts.length && (
            <div className="pageButtons" aria-label="Seitennavigation">
            {currentPage !== 1 && (
                <button 
                    type="button" 
                    onClick={() => changePage(currentPage - 1)} 
                    disabled={currentPage === 1} 
                    aria-label="Vorherige Seite"
                >
                    Prev
                </button>
            )}
            {tempArray.map(page => (
                <button 
                    type="button"
                    key={page}
                    className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ''}`}
                    onClick={() => changePage(page)}
                    disabled={page === currentPage}>
                {page}
                </button>
            ))}
            {currentPage !== tempArray.length && (
                <button type="button" onClick={() => changePage(currentPage + 1)} aria-label="Nächste Seite">Next</button>
            )}
            </div>
        )}

        {isMobile && visible < filteredProducts.length && <div ref={loaderRef} className="h-10" />}
        </section>
    );
    }
