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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, aspernatur, tenetur debitis voluptatibus tempora deleniti iure id voluptate ut saepe cum eaque atque expedita sint vitae modi nihil sunt minus! Modi minima repudiandae inventore dolorem, voluptate illo accusantium enim quos.
                <button onClick={resetFilter}>Go shopping</button>
            </div>
            <div className="sliderContainer"> 
                <Slider products={products.slice(0,6)}/>
            </div>
            <div className="categoryBlock">
                {category.map(c=>{
                    return <div>
                        <button onClick={()=>{categoryFilter(c)}} className="categoryButton">{c}</button>
                        </div>
                })}
            </div>
        </>
    )
}