import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Error() {
    const [redirect, setRedirect] = useState(false);
    const [timer, setTimer] = useState(5);

    useEffect(()=> {
        if (timer < 1) {
            setRedirect(true);
            return
        }

        const id = setInterval(()=>setTimer(prev=>prev-1), 1000)
        return () => clearInterval(id)
    }, [timer])
    
    if (redirect) {
        return <Navigate to='/' replace />
    }

    return (
        <>
            <div className="errorPage">
                Page not found. You will be automatically redirected to the home page in {timer} seconds.
            </div>
        </>
    )
}
