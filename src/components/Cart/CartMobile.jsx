import {useNavigate} from 'react-router-dom'

export default function CartMobile({cart}) {
    const navigate = useNavigate();
    return (
        <>
            <button
            className="fixed bottom-5 right-5 bg-secondary text-white p-4 rounded-full shadowHard z-50"
            onClick={() => navigate('/cart#top')}
            >
            <i className="fa-solid fa-bag-shopping fa-lg"></i>
            {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
                </span>
            )}
        </button>
        </>
    )
}