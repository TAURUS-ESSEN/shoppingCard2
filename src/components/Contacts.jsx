export default function Contacts() {
    return (
        <section className="flex flex-col gap-4 mt-2">
            <h2>Hier finden Sie uns</h2>
            <p>Buchhandlung Bookworm <br />
            Lindenstraße 42, 45127 Essen, Deutschland </p>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:max-w-120 rounded-xl shadowHard">
                    <img src="map.webp" className="rounded-xl" />
                </div>
                <div className=" border rounded-xl p-4 md:max-w-100 md:max-h-50">
                    Montag – Fritag: 10:00 – 18:00 Uhr <br />
                    Samstag: 10:00 - 16.00 
                    <p>
                        <span className="text-secondary-100 italic text-sm leading-none">
                            An gesetzlichen Feiertagen sowie an Weihnachten und Neujahr bleibt unser Laden geschlossen. <br/>
                            In der Adventszeit haben wir an ausgewählten Sonntagen geöffnet – bitte beachten Sie unsere Aushänge im Laden oder auf der Website.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}