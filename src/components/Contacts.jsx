export default function Contacts() {
    return (
        <section className="flex flex-col md:flex-row gap-4 md:gap-20 ">
            <div className="flex flex-col">
                <h2>Hier finden Sie uns</h2>
                <address className="not-italic">
                    Buchhandlung Bookworm<br />
                    Lindenstraße 42<br />
                    45127 Essen, Deutschland
                </address>
                <div className="md:max-w-120 rounded-xl shadow-medium">
                        <img src="map.webp" className="rounded-xl" alt="Karte mit dem Standort der Buchhandlung Bookworm in Essen" />
                </div>
            </div>
            <div className="flex flex-col flex-end items-center md:flex-row gap-4">
                <div className="relative shake">
                    <div className="absolute md:-top-35 ">
                        <img src="openTime.webp" alt="" aria-hidden="true" />
                    </div>
                    <div className="md:max-w-100 md:max-h-60 flex flex-col gap-2 p-6 rounded-xl 
                    shadow-medium bg-secondary text-white relative ">
                        <h2 className="text-center text-white">Öffnungszeiten:</h2>
                        <p>
                            Montag - Freitag: 10:00 - 18:00 Uhr<br />
                            Samstag: 10:00 - 16:00 Uhr<br />
                            Sonntag: geschlossen
                        </p>
                        <p className="italic text-sm leading-none">
                            An gesetzlichen Feiertagen sowie an Weihnachten und Neujahr bleibt unser Laden geschlossen. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}