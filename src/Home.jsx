import { useOutletContext, useNavigate } from "react-router-dom";
import Slider from './components/Slider/Slider'
import Bestseller from './components/Bestseller/Bestseller'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Home () {
    const navigate = useNavigate();
    const {products, category, setSelectedCategory} = useOutletContext();
    
    function goToCategory(value) {
        setSelectedCategory([value])
        navigate(`/shop`);
    }

    function resetFilter() {
        setSelectedCategory(category)
        navigate(`/shop`);
    }

    return (
        <section className="mt-4 -mx-4 relative">
            <div className="flex w-full justify-between bg-promo">
                <div className="flex flex-col px-4 md:p-12 gap-2 justify-center"> 
                    <h1 className="text-2xl md:text-6xl text-primary font-semibold animate-fade-up">ZEIT <br /> FÜR EIN <br />  GUTES BUCH.</h1>
                    <p className="animate-fade-up-200">
                        <button className="btn animate-fade-up-400" onClick={resetFilter}>Zum Shop 
                            <FontAwesomeIcon icon={faCartArrowDown} className="text-white"/>
                        </button>
                    </p>
                </div>
                <div className="max-w-[240px] md:max-w-[600px] overflow-hidden "> 
                    <img src='promo.webp' width='600' alt='promo image' className="animate-zoom-in-slow will-transform block"/>
                </div>
            </div>
            <div className=""> 
                <Bestseller products={products.slice(21,27)}/>
            </div>
            <div className="bg-secondary md:bg-transparent flex flex-col justify-center items-center gap-2 md:gap-5 p-2 max-w-[330px]  md:max-w-[700px] m-auto rounded-2xl"> 
                <h2 className="text-center md:uppercase text-white md:text-primary">Erhalte 10 % Rabatt auf deine erste Bestellung</h2>
                <p className="text-center text-sm md:text-xl text-white md:text-primary">Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.</p>
                <div className="flex items-center flex-col w-full md:flex-row justify-center gap-2">
                    <input type="text" placeholder="E-Mail-Adresse eingeben" className="bg-white  md:min-w-[400px]"/>
                    <button className="btn max-w-25 bg-tertiary text-primary  md:bg-primary md:text-white md:max-w-40">Abonnieren</button>
                </div>
            </div>
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,20)}/>
            </div>
            <section className="mt-10 px-4">
                <div className="text-center mb-2"><h2 className="uppercase">Nach Kategorie einkaufen</h2></div>
                <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
                    {category.map(c=>{
                        return (
                            <div key={c} >
                                <button
                                    onClick={() => goToCategory(c)}
                                    className="flex items-center border-2 border-secondary text-secondary px-3 md:px-6 py-3 rounded-2xl font-medium md:font-semibold shadow-sm hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >{c}</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}