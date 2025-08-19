import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
export default function Category() {
    const [products, , category, selectedCategory, setSelectedCategory] =  useOutletContext();
    function changeSelectedCategory(value) {
        console.log(value)
        // if selectedCategory.includes(value)
        setSelectedCategory(prev=>prev.includes(value) ? prev.filter(c=>c!==value) : [...prev, value])
    }
        
    useEffect(()=>{
        console.log(selectedCategory)
    }, [selectedCategory])
    return (
        <>
            {category.length > 0  && (
            <div>
                {category.map(value=>{
                return (
                    <div key={value}>
                        <input type="checkbox" onChange={() => {changeSelectedCategory(value)}} value={value} checked={selectedCategory.includes(value)}/>{value}
                    </div>
                )
                })}
            </div>
            )}
        </>
    )
}