export default function About() {
    return (
        <section className="flex flex-col md:flex-row gap-4 about leading-relaxed mt-2 md:mt-4">
            <div>
                <article className="flex flex-col gap-2 p-4">
                    <h2>Über uns</h2>
                    <p> Willkommen bei <span className="text-secondary font-semibold">Bookworm</span> – einem traditionsreichen, gemütlichen Buchladen im Herzen der Stadt. Seit über zwanzig Jahren begleiten wir unsere Kundinnen und Kunden auf ihrer Reise durch die Welt der Bücher. Bei uns finden Sie nicht nur Bestseller und Klassiker, sondern auch persönliche Empfehlungen, die perfekt zu Ihnen passen.</p>
                    <div className=""><img src="about.webp" /></div>
                    <p> Bei uns findet jeder etwas für sich – ob Liebhaber spannender Romane, Freunde moderner Sachbücher oder kleine Entdecker in unserer Kinderabteilung. Wir legen Wert auf Vielfalt und sorgfältig ausgewählte Titel, die inspirieren, berühren oder einfach Freude schenken</p>
                    <div className="flex ">
                        <img src="people.webp" />
                    </div>
                    <p>
                        Viele unserer Kundinnen und Kunden begleiten uns seit Jahren. Wer einmal bei uns war, kommt gern wieder – wegen der persönlichen Atmosphäre, der ehrlichen Beratung und der Liebe zu Büchern, die man in jeder Ecke unseres Ladens spürt.
                    </p>
                </article>
            </div>
            <div> 
                <article className="flex flex-col gap-2 p-4 bg-promo rounded-xl">
                    <h2>Unsere Versprechen</h2>
                    <div className=""><img src="bookstore.webp" /></div>
                    <p> Wir glauben an individuelle Beratung, persönliche Gespräche und die Magie eines guten Buches. 
                        In unserem Laden finden Sie eine ruhige Leseecke, in der Sie neue Bücher bei einer Tasse Kaffee entdecken können.</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div><img src="bookstore3.webp" className="max-w-[200px]"/></div>
                            <div>
                                <div>
                                    Unsere Mitarbeiterinnen und Mitarbeiter nehmen sich Zeit für Sie – mit Herz, Erfahrung und einem offenen Ohr für Ihre Wünsche. Wir helfen Ihnen, Geschichten zu finden, die inspirieren, berühren oder einfach nur Freude schenken.
                                </div>
                                <div>
                                    Ob Roman, Fachbuch oder Kinderliteratur – bei uns zählt nicht der schnelle Verkauf, sondern das gemeinsame Entdecken. Kommen Sie vorbei und spüren Sie die besondere Atmosphäre, die nur ein echter Buchladen haben kann.
                                </div>
                            </div>
                        </div>
                        <div><img src="bookstore2.webp" /></div>
                </article>
            </div>
        </section>
    )
}