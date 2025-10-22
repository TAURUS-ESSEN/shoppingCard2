import styles from './category.module.css'
import { useOutletContext } from "react-router-dom";
export default function Category() {
    const {category, selectedCategory, setSelectedCategory} =  useOutletContext();
    function changeSelectedCategory(value) {
        setSelectedCategory(prev=>prev.includes(value) ? prev.filter(c=>c!==value) : [...prev, value])
    }
        
    return (
        <>
            {category.length > 0  && (
            <div className="flex flex-col min-w-[250px] p-4 rounded-xl bg-primary text-white">
                {category.map(value=>{
                return (
                    <label key={value} className="flex items-center">
                        <input 
                            htmlFor={value}
                            type="checkbox" 
                            onChange={() => {changeSelectedCategory(value)}} 
                            value={value} 
                            className="w-5 h-5 m-2 cursor-pointer text-white accent-promo"
                            checked={selectedCategory.includes(value)}/>
                        <span>{value}</span>
                    </label>
                )
                })}
            </div>
            )}
        </>
    )
}