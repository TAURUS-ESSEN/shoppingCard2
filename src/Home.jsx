import { useOutletContext, useNavigate } from "react-router-dom";
import Slider from './components/Slider/Slider'

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
        <>
            <div className="promo">
                <div>
                    Welcome to our online store! Discover trendy clothes, stylish accessories, and quality products for everyday life. Shopping made simple, fast, enjoyable.
                    <p>
                        <button onClick={resetFilter}>Go shopping 
                            <i className="fa-solid fa-cart-arrow-down" style={{color: '#fff'}}></i>
                        </button>
                    </p>
                </div>
                <div><img src='promo.jpg' width='300px' alt='promo image'/></div>
            </div>
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,6)}/>
            </div>
            <div className="categoryBlock"><h2>Shop by Category</h2></div>
            <div className="categoryBlock">
                {category.map(c=>{
                    return (
                        <div key={c}>
                            <button onClick={()=>{goToCategory(c)}} className="categoryButton">{c}</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}