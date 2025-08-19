import styles from './slider.module.css';
import {useState, useEffect} from 'react';
import { useOutletContext, Link } from "react-router-dom";

export default function Slider() {
    const [products, setProducts] = useOutletContext();
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const tiktak = setInterval(()=> {
            setIndex(prev => (prev >= products.length - 3 ? 0 : prev + 1)) 
        }, 3000)
        return () => clearInterval(tiktak)
        },[products])

    return (
        <>
            <div className={styles.component}>
                
        <div className={styles.container}>
            <div className={styles.cardsSlider} style={{ transform: `translateX(-${index * (100 / 3)}%)` }}>
                {/* {products.slice(products.length-6,products.length).map(product=> { */}
                {products.slice(0,6).map(product=> {
                    return (
                        <div className={styles.card}>
                            <Link to={`/shop/product/${product.id}`} state={{ product }}>
                                <div className={styles.cardImg}><img src={product.image} width='50px'/></div>
                                <div className={styles.cardTitle}>{product.title}</div>
                                <div className={styles.cardPrice}>{product.price}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        </>
    )
}