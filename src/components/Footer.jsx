import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="mt-10 flex flex-col gap-4 bg-primary text-white p-5 -mx-4">

                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly gap-2 ">
                            <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-xl'>
                                <a href="tel:+49160123455999" >+49 160 123 455 999</a> 
                                <a href="mailto:info@bookworm.de" >info@bookworm.de</a>
                            </div>
                            <div className='flex'>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="2xl"   />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://wa.me/491701234567" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="2xl" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
         
                <div className="flex flex-wrap justify-center gap-4 ">
                    <Link to="/legal#versand" >Versand & Rückgabe</Link>
                    <Link to="/legal#agb">AGB</Link>
                    <Link to="/legal#zahlung" >Zahlungsmethoden</Link>
                    <Link to="/legal#impressum">Impressum</Link>
                    <Link to="/legal#datenschutz">Datenschutz</Link>
              
                </div>
                <div className="border-t-1 text-center pt-2">Copyright 2025 Bookworm. Alle Rechte vorbehalten.</div>
        </footer>
    )
}