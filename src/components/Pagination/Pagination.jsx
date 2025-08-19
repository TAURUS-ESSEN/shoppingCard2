import {useState} from 'react'
import styles from './pagination.module.css'

export default function Pagination({products}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    const pageCount = Math.max(1, Math.ceil(products.length / itemsPerPage))
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

    return (
        <>
        <div>
            <label htmlFor="select" className={styles.selector}>Products per Page</label>
            <select name='select' id='select' className={styles.selector} onChange={(e)=>changeItemsPerPage(e)}  value={itemsPerPage} >
                <option value='6'>6</option>
                <option value='10'>10</option>
                <option value={products.length}>All</option>
            </select>
        </div>
        {/* <div className={styles.products}>
            {products.slice(start,end).map(product => {
                return (
                    <div className={styles.card}>
                        <div className={styles.cardImg}><img src={product.image} /></div>
                        <div className={styles.cardTitle}>{product.id} {product.title}</div>
                    </div>
                )
            }) }
        </div> */}
        {itemsPerPage !== products.length && (
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