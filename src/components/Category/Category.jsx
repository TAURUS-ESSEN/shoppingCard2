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

    const isAll = selectedCategory.length === category.length;

    const handleCategoryClick = (value) => {
        if (isAll) {
        setSelectedCategory([value]);
        return;
        }
        setSelectedCategory(prev => (
        prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
        ));
    };

    const pickAll = () => setSelectedCategory(category);

    const currentMobileValue = isAll ? 'all' : (selectedCategory[0] ?? 'all');

    return (
        <section>
        {category.length > 0 && (
            <>
            {!isMobile && (
                <div className="flex flex-col min-w-[250px] p-4 rounded-xl bg-primary text-white border-3 border-white shadow-medium">

                {/* Alle Kategorien */}
                <label className="flex items-center text-amber-100  mb-2 border-b border-white/40 pb-2">
                    <input
                    type="checkbox"
                    className="w-5 h-5 m-2 cursor-pointer accent-promo disabled:cursor-not-allowed"
                    checked={isAll}
                    disabled={isAll}
                    onChange={pickAll}
                    />
                    <span>Alle Kategorien</span>
                </label>

                {category.map(value => (
                    <label key={value} className="flex items-center">
                    <input
                        type="checkbox"
                        className="w-5 h-5 m-2 cursor-pointer accent-promo"
                        onChange={() => handleCategoryClick(value)}
                        checked={isAll ? true : selectedCategory.includes(value)}
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
                    if (val === 'all') pickAll();
                    else setSelectedCategory([val]); 
                    }}
                >
                    <option value="all">Alle Kategorien</option>
                    {category.map(value => (
                    <option key={value} value={value}>{value}</option>
                    ))}
                </select>
                </div>
            )}
            </>
        )}
        </section>
    );
    }
