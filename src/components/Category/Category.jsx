import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";

export default function Category() {
    const { category, selectedCategory, setSelectedCategory } = useOutletContext();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);
    

    function changeSelectedCategory(value) {
        setSelectedCategory(prev =>
        prev.includes(value)
            ? prev.filter(c => c !== value)
            : [...prev, value]
        );
    }

    const isAll = selectedCategory.length === category.length;
    const currentMobileValue = isAll ? 'all' : (selectedCategory[0] ?? 'all');

    return (
        <section>
        {category.length > 0 && (
            <>
            {!isMobile && (
                <div className="flex flex-col min-w-[250px] p-4 rounded-xl bg-primary text-white border-3 border-white shadow-medium">
                {category.map(value => (
                    <label key={value} className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => changeSelectedCategory(value)}
                        value={value}
                        className="w-5 h-5 m-2 cursor-pointer accent-promo"
                        checked={selectedCategory.includes(value)}
                    />
                    <span>{value}</span>
                    </label>
                ))}
                </div>
            )}

            {isMobile && (
                <div className="p-2">
                    
                <select
                    className="w-full rounded-md p-2 bg-primary text-white border-3 border-white shadow-medium"
                    value={currentMobileValue}
                    onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'all') {
                        setSelectedCategory(category);      
                    } else {
                        setSelectedCategory([val]); 
                    }
                    }}
                > 
                <option value="all">Alle Kategorien</option>
                    {category.map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    ))}
                </select>
                </div>
            )}
            </>
        )}
        </section>
    );
    }
