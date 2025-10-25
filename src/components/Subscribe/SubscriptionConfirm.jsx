import { useEffect, useState } from "react"; 
import { Navigate, Link } from "react-router-dom";

export default function SubscriptionConfirm() {
    const [redirect, setRedirect] = useState(false);
    const [seconds, setSeconds] = useState(10);

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
            <div className="flex flex-col gap-2 text-center">
                <h2>Vielen Dank für deine Bestätigung!</h2>
                <p>Deine Anmeldung zu unserem Newsletter war erfolgreich.  
                Ab jetzt erhältst du regelmäßig Neuigkeiten, Buchempfehlungen und exklusive Angebote von Bookworm.</p>
                You will be automatically redirected to the home page in {seconds} seconds. 
                <Link to='/' className="bg-secondary text-white p-3 rounded-lg max-w-40">Zur Startseite</Link>
            </div>
        </>
    )
}
