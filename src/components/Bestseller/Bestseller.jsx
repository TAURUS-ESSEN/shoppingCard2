import { Link } from "react-router-dom";

export default function Bestseller({products}) {
    return (
        <section className="my-8 relative text-center">
            <div className="hidden md:block absolute -bottom-2 left-0 w-full h-[120px] bg-secondary animate-fade-up-200"></div>
            <h2 className="uppercase animate-fade-up-200 mb-4">Bestseller</h2>

            <ul className="flex flex-wrap justify-center gap-3 md:gap-5 relative z-10" role="list">
                {products.map((product) => (
                <li className="max-w-[150px] hover:scale-105 transition duration-300 " key={product.id}>
                    <Link
                    to={`/shop/product/${product.id}`}
                    state={{ product }}
                    className="block h-full"
                    >
                    <div className="flex flex-col h-full animate-fade-up-200">
                        <div className="card h-[210px]  border-4 border-transparent hover:border-amber-600 rounded-xl transition duration-300">
                        <img
                            src={`/library/${product.image}`}
                            alt={`Buchcover: ${product.title}`}
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                        </div>

                        <div className="flex flex-col justify-between flex-1 ">
                        <div className="text-primary md:text-white">{product.price} €</div>
                        </div>
                    </div>
                    </Link>
                </li>
                ))}
            </ul>
    </section>

    )
}