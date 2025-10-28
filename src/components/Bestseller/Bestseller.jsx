import { Link } from "react-router-dom";

export default function Bestseller({products}) {
    return (
        <section className="my-8 relative text-center">
            <div className="hidden md:block absolute -bottom-2 left-0 w-full h-[120px] bg-secondary animate-fade-up-200"></div>
            <h2 className="uppercase animate-fade-up-200 mb-4">Bestseller</h2>

            <ul className="flex flex-wrap justify-center gap-3 md:gap-5 relative">
                {products.map((product) => (
                <li className="group max-w-[150px] transition-transform duration-300 hover:scale-105" key={product.id}>
                    <Link
                    to={`/shop/product/${product.id}`}
                    aria-label={`Zum Produkt ${product.title}`}
                    state={{ product }}
                    className="block h-full"
                    >
                    <div className="flex flex-col h-full animate-fade-up-200">
                        <div className="card h-[210px] border-4 border-transparent rounded-xl transition-colors duration-300 group-hover:border-secondary">
                        <img
                            src={`/library/${product.image}`}
                            alt={`Buchcover: ${product.title}`}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                        </div>
                        <div className="text-primary md:text-white">{product.price} €</div>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}