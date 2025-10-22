import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="mt-10 flex flex-col gap-4 bg-primary text-white p-5 -mx-4">

                    <div className="flex flex-col">
                        <div className="flex justify-evenly gap-1 ">
                            <div className='flex gap-4 text-xl'>
                                <span>Tel.  +49 160 123 455 999</span>
                                <span>info@bookworm.de</span>
                            </div>
                            <div>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-white" />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2xl"  className="text-white"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://wa.me/491701234567" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} size="2xl"  className="text-white" />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl"  className="text-white"/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="2xl" className="text-white" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                <div>   
                    <div className="flex justify-center p-2 gap-5">
                        <span>Versand & Rückgabe</span>
                        <span>AGB</span>
                        <span>Zahlungsmethoden</span>
                        <span>Impressum</span>
                        <span>Datenschutz</span>
                    </div>
                </div>
                <div className="border-t-1 text-center pt-2">Copyright 2025 Bookworm. Alle Rechte vorbehalten.</div>
        </footer>
    )
}