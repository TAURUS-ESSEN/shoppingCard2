import styles from './slider.module.css';
import {useState, useEffect} from 'react';
import { useOutletContext, Link } from "react-router-dom";

export default function Slider({products}) {
    // const [products] = useOutletContext();
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(()=>{
        if (products.length < 3 || paused) return; 
        const tiktak = setInterval(()=> {
            setIndex(prev => (prev >= products.length - 3 ? 0 : prev + 1)) 
        }, 3000)
        return () => clearInterval(tiktak)
        },[products.length, paused])

    return (
        <>
            <div className={styles.component}>
                <div className={styles.arrows}>
                <button 
                    onClick={() => {setIndex(prev => Math.max(prev - 1, 0));}} // не дает индексу уйти в минус
                    onMouseEnter={() => setPaused(true)} 
                    onMouseLeave={() => setPaused(false)}
                    className={styles.buttons}
                >
                    {<i class="fa-solid fa-circle-arrow-left fa-2xl" style={{color: '#010152'}}></i>}
                </button>
            </div>
        <div className={styles.container}>
            <div className={styles.legend}><h2>Hot New Arrivals</h2></div>
            <ul className={styles.cardsSlider} 
            style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
                onMouseEnter={() => setPaused(true)} 
                onMouseLeave={() => setPaused(false)}>
                {/* {products.slice(products.length-6,products.length).map(product=> { */}
                {products.slice(0,6).map(product=> {
                    return (
                        <li className={styles.card} key={product.id}>
                            <Link to={`/shop/product/${product.id}`} state={{ product }}>
                                <div className={styles.cardImg}><img src={product.image} alt={product.title}/></div>
                                <div className={styles.cardTitle}>{product.title}</div> 
                            </Link>
                                <div className={styles.cardPrice}>{product.price.toFixed(2)} $</div>
                           
                        </li>
                    )
                })}
            </ul>
        </div>
                    <div className={styles.arrows}>
                <button 
                    onClick={() => {setIndex(prev => Math.min(prev + 1, products.length - 3));}} 
                    onMouseEnter={() => setPaused(true)} 
                    onMouseLeave={() => setPaused(false)}
                    className={styles.buttons}
                >
                    {<i class="fa-solid fa-circle-arrow-right fa-2xl" style={{color: '#010152'}}></i>}
                </button>
            </div>
        </div>
        </>
    )
}