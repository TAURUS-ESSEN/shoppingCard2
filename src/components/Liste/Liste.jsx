import { useEffect, useState } from 'react';
import styles from './liste.module.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination'
import { useOutletContext } from "react-router-dom";

export default function Liste() {
    const [products, , category, selectedCategory, setSelectedCategory, cart, setCart] =  useOutletContext();
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    const pageCount = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
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
        setFilteredProducts(products.filter(product => {
            if (selectedCategory.includes(product.category)) {
                return product
            }
        }))
    },[selectedCategory])

    function addToCart(id) {
        setCart(prev=>[...prev, id])
    }

    function removeFromCart(id) {
        setCart(prev=>prev.filter(value=>value!==id))
    }
    
    return (
        <>
                <div>
                    <label htmlFor="select" className={styles.selector}>Products per Page</label>
                    <select name='select' id='select' className={styles.selector} onChange={(e)=>changeItemsPerPage(e)}  value={itemsPerPage} >
                        <option value='6'>6</option>
                        <option value='10'>10</option>
                        <option value={filteredProducts.length}>All</option>
                    </select>
                </div>
        {/* {console.log(filteredProducts)} */}
            <div className={styles.liste}>
                {filteredProducts.slice(start,end).map(product=>{ 
                    if (selectedCategory.includes(product.category)) {
                    return (
                        <div className={styles.card}>
                            <Link to={`product/${product.id}`} className={styles.link} state={{ product }}>
                                <div><img src={product.image} width='50px'/></div>
                                <div>{product.title}</div>
                            </Link>
                                <div>{product.price}</div>
                                {cart.includes(product.id) ? (
                                    <button onClick={()=>removeFromCart(product.id)}>Remove from shopping cart</button>
                                ) : (<button onClick={()=>addToCart(product.id)}>Add to Cart</button>)}
                        </div>
                    )
                }
                })}
            </div>
           {itemsPerPage !== filteredProducts.length && (
                   <div className={styles.pageButtons}>
                       <button onClick={()=> {changePage(currentPage-1)}} disabled={currentPage === 1}>Prev</button>
                   { tempArray.map(page => {
                       return (
                           <button key={page} 
                           className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ''}`} 
                           onClick={()=>changePage(page)}
                           disabled = {page===currentPage}
                           >
                               {page}
                           </button>
                       )
                   })}
                   <button onClick={()=> {changePage(currentPage+1)}} disabled={currentPage === tempArray.length}>Next</button>    
                   </div>
                   )}
        </>
    )
}