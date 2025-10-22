import { useOutletContext, useNavigate } from "react-router-dom";
import Slider from './components/Slider/Slider'
import Bestseller from './components/Bestseller/Bestseller'

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
        <section className="-mx-4 relative">
            <div className="flex w-full justify-between bg-promo">
                <div className="flex flex-col p-12 gap-4 justify-center"> 
                    <h1 className="text-6xl text-primary font-semibold">ZEIT <br /> FÜR EIN <br />  GUTES BUCH.</h1>
                    <p>
                        <button className="btn" onClick={resetFilter}>Zum Shop 
                            <i className="fa-solid fa-cart-arrow-down" style={{color: '#fff'}}></i>
                        </button>
                    </p>
                </div>
                <div className="md:max-w-[600px]"> 
                    <img src='promo.webp' width='600' alt='promo image'/>
                </div>
            </div>
            <div className=""> 
                <Bestseller products={products.slice(21,26)}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-w-[700px] m-auto"> 
                <h2 className="text-center">Erhalte 10 % Rabatt auf deine erste Bestellung</h2>
                <p className="text-xl">Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.</p>
                <div className="flex gap-2 justify-center gap-5">
                    <input type="text" placeholder="E-Mail-Adresse eingeben" className="min-w-[500px]"/>
                    <button className="btn">Abonnieren</button>
                </div>
            </div>
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,20)}/>
            </div>
            {/* <div className="categoryBlock"><h2>Shop by Category</h2></div>
            <div className="categoryBlock">
                {category.map(c=>{
                    return (
                        <div key={c}>
                            <button onClick={()=>{goToCategory(c)}} className="categoryButton">{c}</button>
                        </div>
                    )
                })}
            </div> */}
        </section>
    )
}