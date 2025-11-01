import { useOutletContext, useNavigate } from "react-router-dom";
import Slider from './components/Slider/Slider'
import Bestseller from './components/Bestseller/Bestseller'
import Subscribe from "./components/Subscribe/Subscribe";
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
             {/*            Hero           */}
            <div className="flex w-full justify-between bg-promo">
                <div className="flex flex-col px-4 md:p-12 gap-2 justify-center"> 
                    <h1 className="text-xl md:text-4xl lg:text-6xl text-primary font-semibold animate-fade-up">ZEIT <br /> FÜR EIN <br />  GUTES BUCH.</h1>
                    <p className="animate-fade-up-200">
                        <button 
                            className="btn border-2 border-white w-30 md:w-50 md:p-4 animate-fade-up-400" 
                            onClick={resetFilter}
                            aria-label="Zum Shop - alle Kategorien anzeigen"
                        >

                            <span>Zum Shop</span> 
                            <FontAwesomeIcon icon={faCartArrowDown} className="text-white" aria-hidden="true"/>
                        </button>
                    </p>
                </div>
                <div className="max-w-65 md:max-w-150 overflow-hidden "> 
                    <img 
                        src='promo.webp' 
                        width='600' 
                        alt="Regale voller Bücher in einer gemütlichen Buchhandlung."
                        className="animate-zoom-in-slow will-transform block"
                    />
                </div>
            </div>

            {/*            Bestseller Block           */}
            <div className=""> 
                <Bestseller products={products.slice(21,27)}/>
            </div>

            {/*            Subscribe Block           */}
            <Subscribe />

             {/*            Slider Block           */}
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,20)}/>
            </div>

             {/*            Kategorie Block           */}
            <article className="mt-10 px-4">
                <div className="text-center mb-2">
                    <h2 className="uppercase">Nach Kategorie einkaufen</h2>
                </div>
                <ul className="flex flex-wrap gap-2 md:gap-5 justify-center" role="list">
                    {category.map((c) => (
                        <li key={c}>
                        <button
                            type="button"
                            onClick={() => goToCategory(c)}
                            className="categoryButton"
                            aria-label={`Kategorie öffnen: ${c}`}
                        >
                            {c}
                        </button>
                        </li>
                    ))}
                </ul>
            </article>

        </section>
    )
}