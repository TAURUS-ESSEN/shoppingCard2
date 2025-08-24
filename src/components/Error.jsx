import { useEffect, useState } from "react"; 
import { Navigate, Link } from "react-router-dom";

export default function Error() {
    const [redirect, setRedirect] = useState(false);
    const [seconds, setSeconds] = useState(5);

    useEffect(()=> {
        if (seconds < 1) {
            setRedirect(true);
            return
        }
        const timer = setInterval(() => setSeconds(s => s - 1), 1000)
        return () => clearInterval(timer)
    }, [seconds])
    
    if (redirect) {
        return <Navigate to='/' replace />
    }

    return (
        <>
            <div className="errorPage">
                Page not found. You will be automatically redirected to the home page in {seconds} seconds. 
                <Link to='/' className="goHome">Go home now</Link>
            </div>
        </>
    )
}
