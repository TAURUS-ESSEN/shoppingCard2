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
            <div className={styles.container}>
                {category.map(value=>{
                return (
                    <div key={value} className={styles.category}>
                        <input 
                            type="checkbox" 
                            onChange={() => {changeSelectedCategory(value)}} 
                            value={value} 
                            className={styles.checkbox}
                            checked={selectedCategory.includes(value)}/>
                        {value}
                    </div>
                )
                })}
            </div>
            )}
        </>
    )
}