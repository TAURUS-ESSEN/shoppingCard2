import { useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
    // const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
    return (
        <>
            {product.title}
        </>
    )
}