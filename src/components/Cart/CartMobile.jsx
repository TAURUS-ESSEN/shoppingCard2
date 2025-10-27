import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartMobile({cart}) {
    const navigate = useNavigate();
    return (
        <>
            <button
            className="fixed bottom-5 right-5 bg-secondary text-white p-2 rounded-full shadowHard z-50"
            onClick={() => navigate('/cart#top')}
            >
            {/* <i className="fa-solid fa-bag-shopping fa-lg"></i> */}
            <FontAwesomeIcon icon={faBagShopping} className='text-2xl'/>
            {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
                </span>
            )}
        </button>
        </>
    )
}