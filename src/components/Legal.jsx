import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Legal() {
    const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location]);

  return (
    <section className="my-10 px-4">
      <nav className="sticky top-2 z-10 bg-white/70 backdrop-blur rounded-2xl shadow p-3 flex flex-wrap gap-3 mb-8">
        <a href="#agb" className="px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition">AGB</a>
        <a href="#impressum" className="px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition">Impressum</a>
        <a href="#zahlung" className="px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition">Zahlungsmethoden</a>
        <a href="#datenschutz" className="px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition">Datenschutz</a>
        <a href="#versand" className="px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition">Versand & Rückgabe</a>
      </nav>

      {/* AGB */}
      <section id="agb" className="scroll-mt-24 mb-12 bg-promo p-6 rounded-2xl shadow">
        <h2>AGB</h2>
        <div className="text-secondary leading-relaxed space-y-2">
          <p>Unsere Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die über unseren Online-Shop aufgegeben werden. Mit Ihrer Bestellung erklären Sie sich mit unseren AGB einverstanden.</p>
          <p>Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Der Versand erfolgt innerhalb Deutschlands; die Lieferzeit beträgt in der Regel 3–5 Werktage. Sollte ein Artikel nicht verfügbar sein, informieren wir Sie umgehend per E-Mail.</p>
          <p>Reklamationen und Rücksendungen sind innerhalb von 14 Tagen nach Erhalt der Ware möglich.</p>
        </div>
      </section>

      {/* Impressum */}
      <section id="impressum" className="scroll-mt-24 mb-12 bg-tertiary p-6 rounded-2xl shadow">
        <h2>Impressum</h2>
        <div className="leading-relaxed text-secondary space-y-2">
          <p><span className="font-semibold">Buchhandlung Bookworm</span><br/>
             Inhaber: Max Mustermann<br/>
             Lindenstraße 42, 45127 Essen, Deutschland</p>
          <p>Telefon: +49 160 123 455 999 · E-Mail: info@bookworm.de</p>
          <p>Umsatzsteuer-ID: DE123456789<br/>
             Verantwortlich gemäß § 55 Abs. 2 RStV: Yevhen Reitarov</p>
          <p className="italic border-l-4 border-secondary pl-4">
            Hinweis: Alle Texte und Bilder auf dieser Website wurden ganz oder teilweise mit Hilfe von Künstlicher Intelligenz (KI) generiert. Der Inhalt dient ausschließlich zu Demonstrationszwecken und stellt kein reales Unternehmen dar.
          </p>
        </div>
      </section>

      {/* Zahlungsmethoden */}
      <section id="zahlung" className="scroll-mt-24 mb-12 bg-promo2 p-6 rounded-2xl shadow">
        <h2>Zahlungsmethoden</h2>
        <ul className="list-disc pl-6 text-secondary space-y-1">
          <li>Kreditkarte (Visa, MasterCard)</li>
          <li>PayPal</li>
          <li>Vorkasse (Banküberweisung)</li>
          <li>Barzahlung im Laden</li>
        </ul>
        <p className="mt-3 text-secondary-100">
          Die Zahlung erfolgt sicher über verschlüsselte Verbindungen. Bei Vorkasse erhalten Sie unsere Bankdaten in der Bestellbestätigung; der Versand erfolgt nach Zahlungseingang.
        </p>
      </section>

      {/* Datenschutz */}
      <section id="datenschutz" className="scroll-mt-24 mb-12 bg-promo p-6 rounded-2xl shadow">
        <h2>Datenschutz</h2>
        <div className="text-secondary leading-relaxed space-y-2">
          <p>Wir verarbeiten personenbezogene Daten (z. B. Name, Adresse, E-Mail) ausschließlich zur Bestellabwicklung, Kundenkommunikation und zur Verbesserung unseres Angebots.</p>
          <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Eine Weitergabe an Dritte erfolgt nur, sofern dies zur Lieferung oder Zahlung erforderlich ist.</p>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch. Kontakt: info@bookworm.de</p>
          <p>Für Demo-Zwecke erstellt: Es werden keine echten Nutzerprofile gebildet, keine Tracking-Cookies gesetzt.</p>
        </div>
      </section>

      {/* Versand & Rückgabe (Versandkosten) */}
      <section id="versand" className="scroll-mt-24 mb-12 bg-tertiary p-6 rounded-2xl shadow">
        <h2>Versand & Rückgabe</h2>
        <div className="text-secondary leading-relaxed space-y-2">
          <p><span className="font-semibold">Versandkosten:</span> 25,00 € pro Bestellung. <span className="font-semibold">Ab 50,00 €</span> Bestellwert ist der Versand <span className="font-semibold">kostenlos</span>.</p>
          <p><span className="font-semibold">Lieferzeit:</span> in der Regel 3–5 Werktage innerhalb Deutschlands.</p>
          <p><span className="font-semibold">Rückgabe:</span> Sie können Artikel innerhalb von 14 Tagen nach Erhalt zurücksenden. Bitte legen Sie die Bestellnummer bei und stellen Sie sicher, dass die Ware unbenutzt und originalverpackt ist.</p>
          <p>Bei Fragen kontaktieren Sie uns bitte unter <span className="underline">info@bookworm.de</span>.</p>
        </div>
      </section>

      <div className="text-center">
        <a href="#top" className="text-secondary underline">Nach oben ↑</a>
      </div>
    </section>
  );
}
