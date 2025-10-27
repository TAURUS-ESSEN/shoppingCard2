import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="mt-10 flex flex-col gap-4 bg-primary text-white p-5 -mx-4">

                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly gap-2 ">
                            <address className="not-italic flex flex-col md:flex-row gap-2 md:gap-4 text-xl">
                                <a href="tel:+49160123455999" aria-label="Telefonnummer: +49 160 123 455 999">+49 160 123 455 999</a>
                                <a href="mailto:info@bookworm.de" aria-label="E-Mail an info@bookworm.de senden">info@bookworm.de</a>
                            </address>
                            <nav aria-label="Soziale Netzwerke">
                                <ul className="flex gap-3 text-white">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook – externe Seite">
                                    <FontAwesomeIcon icon={faFacebook} size="2xl" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram – externe Seite">
                                    <FontAwesomeIcon icon={faInstagram} size="2xl" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/491701234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp – Chat starten, externe Seite">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn – externe Seite">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube – externe Seite">
                                    <FontAwesomeIcon icon={faYoutube} size="2xl" aria-hidden="true" />
                                    </a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                    <nav aria-label="Rechtliches">
                        <ul className="flex flex-wrap justify-center gap-4 ">
                            <li><Link to="/legal#versand">Versand & Rückgabe</Link></li>
                            <li><Link to="/legal#agb">AGB</Link></li>
                            <li><Link to="/legal#zahlung">Zahlungsmethoden</Link></li>
                            <li><Link to="/legal#impressum">Impressum</Link></li>
                            <li><Link to="/legal#datenschutz">Datenschutz</Link></li>
                        </ul>
                    </nav>
                <div className="border-t text-center pt-2">© 2025 Bookworm. Alle Rechte vorbehalten.</div>
        </footer>
    )
}