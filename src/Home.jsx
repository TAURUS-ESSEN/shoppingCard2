import { useOutletContext, Link, useNavigate } from "react-router-dom";
import Slider from './components/Slider/Slider'
export default function Home () {
    const navigate = useNavigate();
    const [products, ,category, setCategory, selectedCategory, setSelectedCategory] = useOutletContext();
    function categoryFilter(value) {
        selectedCategory(prev=>prev.includes(value) ? prev.filter(c=>c===value) : [value] )
        navigate(`/shop`);
    }

    function resetFilter() {
        selectedCategory(category)
        navigate(`/shop`);
    }

    return (
        <>
            <div className="promo">
                <div>
                 Welcome to our online store! Discover trendy clothes, stylish accessories, and quality products for everyday life. Shopping made simple, fast, enjoyable.
                    <button onClick={resetFilter}>Go shopping</button>
                </div>
                <div><img src='promo.jpg' width='300px'/></div>
            </div>
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,6)}/>
            </div>
            <div className="categoryBlock"><h2>Shop by Category</h2></div>
            <div className="categoryBlock">
                {category.map(c=>{
                    return (
                        <div key={c.id}>
                            <button onClick={()=>{categoryFilter(c)}} className="categoryButton">{c}</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}