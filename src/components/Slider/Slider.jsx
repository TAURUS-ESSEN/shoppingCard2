import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Slider({products}) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

useEffect(() => {
    if (products.length < 5 || paused) return;

    let direction = 1; 

    const tiktak = setInterval(() => {
        setIndex(prev => {
        if (prev >= products.length - 7) direction = -1;
        if (prev <= 0) direction = 1;
        return prev + direction;
        });
    }, 3000);

    return () => clearInterval(tiktak);
}, [products.length, paused]);
    return (
        <section className="mt-10">
            <div className="flex p-2 gap-2">
                <div className="flex items-center">
                <button 
                    onClick={() => {setIndex(prev => Math.max(prev - 1, 0));}} 
                    onMouseEnter={() => setPaused(true)} 
                    onMouseLeave={() => setPaused(false)}
                    className="cursor-pointer bg-transparent border-0 transition ease-out duration-400 hover:scale-125"
                >
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="fa-2xl text-secondary"/>
                </button>
            </div>
        <div className="overflow-hidden">
            <div className="text-center">
                <h2 className='uppercase'>Unsere Neuheiten</h2>
                </div>
            <ul className="flex gap-5 transition ease-out duration-400 w-[1100px]"
                style={{ transform: `translateX(-${index * (100 / 4)}%)` }}
                onMouseEnter={() => setPaused(true)} 
                onMouseLeave={() => setPaused(false)}>
                {products.map(product=> {
                    return (
                        <li className="flex-none w-[200px] px-2" key={product.id}>
                            <Link to={`/shop/product/${product.id}`} state={{ product }}>
                                <div className="card">
                                    <img src={`/library/${product.image}`} alt={product.title}/>
                                </div>
                                {/* <div className="">{product.title}</div>  */}
                            </Link>
                            
                                {/* <div className={styles.cardPrice}>${product.price.toFixed(2)}</div> */}
                                {/* <div className={styles.cardPrice}>${product.price}</div> */}
                        </li>
                    )
                })}
            </ul>
        </div>
                    <div className="flex items-center">
                <button 
                    onClick={() => {setIndex(prev => Math.min(prev + 1, products.length - 3));}} 
                    onMouseEnter={() => setPaused(true)} 
                    onMouseLeave={() => setPaused(false)}
                    className="cursor-pointer bg-transparent border-0 transition ease-out duration-400 hover:scale-125"
                >
                    <FontAwesomeIcon icon={faCircleArrowRight} className="fa-2xl text-secondary"/>
                </button>
            </div>
        </div>
        </section>
    )
}