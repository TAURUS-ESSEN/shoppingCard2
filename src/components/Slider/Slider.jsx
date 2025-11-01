import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slider({products}) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches);
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const onChange = () => setIsMobile(mq.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    const VISIBLE = isMobile ? 1 : 5;         

    useEffect(() => {
        if (products.length <= VISIBLE || paused) return;
        let direction = 1;

        const tiktak = setInterval(() => {
        setIndex(prev => {
            if (prev >= products.length - VISIBLE) direction = -1;
            if (prev <= 0) direction = 1;
            return prev + direction;
        });
        }, 3000);

        return () => clearInterval(tiktak);
    }, [products.length, paused, VISIBLE]);

    const maxIndex = Math.max(0, products.length - VISIBLE);

    return (
        <section className="mt-10">
        <div className="flex p-2 gap-2 justify-center">
            <div className="flex items-center ">
            <button
                onClick={() => setIndex(prev => Math.max(prev - 1, 0))}
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

            <ul
                className="flex md:gap-5 transition ease-out duration-400 w-[200px]  md:w-[1100px] mx-auto"
                style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {products.map(product => (
                <li className="flex-none w-[200px] px-2" key={product.id}>
                    <Link to={`/shop/product/${product.id}`} state={{ product }}>
                    <div className="card">
                        <img src={`/library/${product.image}`} className="rounded-lg" alt={product.title}/>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
            </div>

            <div className="flex items-center">
            <button
                onClick={() => setIndex(prev => Math.min(prev + 1, maxIndex))}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="cursor-pointer bg-transparent border-0 transition ease-out duration-400 hover:scale-125"
            >
                <FontAwesomeIcon icon={faCircleArrowRight} className="fa-2xl text-secondary"/>
            </button>
            </div>
        </div>
        </section>
    );
}
