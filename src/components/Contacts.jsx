export default function Contacts() {
    return (
        <section className="flex flex-col gap-4 mt-2">
            <h2>Hier finden Sie uns</h2>
            <p>Buchhandlung Bookworm <br />
            Lindenstraße 42, 45127 Essen, Deutschland </p>
            
            <div className="flex flex-col justify-around md:flex-row gap-4">
                <div className="md:max-w-120 rounded-xl shadow-medium">
                    <img src="map.webp" className="rounded-xl" />
                </div>
                <div className="relative">
                    <div className="absolute md:-top-35 "><img src="openTime.webp" /></div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 md:max-w-100 md:max-h-60 shadow-medium bg-secondary text-white relative 25">
                        <h2 className="text-center text-white">Öffnungszeiten:</h2>
                        Montag - Freitag: 10:00 - 18:00 Uhr <br />
                        Samstag: 10:00-16:00 Uhr <br />
                        Sonntag: geschlossen
                        <p className="italic text-sm leading-none">
                                An gesetzlichen Feiertagen sowie an Weihnachten und Neujahr bleibt unser Laden geschlossen. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}