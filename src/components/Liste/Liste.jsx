import { useEffect, useState } from 'react';
import styles from './liste.module.css';
import { Link } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

export default function Liste() {
    const {products, selectedCategory, cart, setCart} =  useOutletContext();
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const safeItemsPerPage = Math.max(1, itemsPerPage);
    const start = (currentPage - 1) * safeItemsPerPage;
    const end = start + safeItemsPerPage;
    const pageCount = Math.max(1, Math.ceil(filteredProducts.length / safeItemsPerPage));
    let tempArray = [];

    for (let i=1; i<=pageCount; i++) {
        tempArray.push(i);
    }

    function changePage(value) {
        setCurrentPage(value)
    }

    function changeItemsPerPage(e) {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }

    useEffect(()=>{
        setFilteredProducts(products.filter(product => selectedCategory.includes(product.category)))
        setCurrentPage(1);
    },[products, selectedCategory])

    function addToCart(id) {
        setCart(prev=>[...prev, id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(value=>value!==id))
    }
    
    return (
        <section>
            <div>
                <label htmlFor="select" className={styles.selector}>Products per Page</label>
                <select name='select' id='select' className="border-1 rounded p-1" onChange={(e)=>changeItemsPerPage(e)}  value={itemsPerPage} >
                    <option value='8'>8</option>
                    <option value='16'>16</option>
                    <option value={Math.max(1, filteredProducts.length)}>All</option>
                </select>
            </div>
 
            <div className="flex flex-wrap gap-4 mt-2">
                {filteredProducts.slice(start,end).map(product=>{ 
                    return (
                        <div className="card flex flex-col gap-2 max-w-[210px] bg-promo fade-up-soft border-2  border-transparent hover:border-secondary transition-transform duration-400" key={product.id}>
                            <Link to={`product/${product.id}`} className={styles.link} state={{ product }}>
                                <div className="">
                                    <img src={`/library/${product.image}`} alt={product.title} className='rounded-lg'/>
                                </div>
                                {/* <div className={styles.title}>{product.title}</div> */}
                            </Link>
                            {/* <div className={styles.price}>${product.price.toFixed(2)}</div> */}
                            <div className='flex justify-between items-center p-1 gap-4 w-full '>
                                <div className="text-2xl">{product.price} €</div>
                                {cart.includes(product.id) ? (
                                    <button onClick={()=>removeFromCart(product.id)} className="hover:cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img src='minus.webp' width="40"/>
                                    </button>
                                    ) : (
                                    <button onClick={()=>addToCart(product.id)} className="hover:cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img src='add.webp' width="40"/>
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                }
                )}
            </div>

            {itemsPerPage !== filteredProducts.length && (
            <div className="pageButtons">
                {currentPage !== 1 && (
                    <button onClick={()=> {changePage(currentPage-1)}} disabled={currentPage === 1}>Prev</button>
                )}
                { tempArray.map(page => {
                    return (
                        <button key={page} 
                            className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ''}`} 
                            onClick={()=>changePage(page)}
                            disabled = {page===currentPage}>
                            {page}
                        </button>
                    )
                })}
                {currentPage !== tempArray.length && (
                    <button onClick={()=> {changePage(currentPage+1)}}>Next</button>  
                )}  
            </div>
            )}
        </section>
    )
}