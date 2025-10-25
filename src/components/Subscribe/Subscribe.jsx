import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await r.json();
      setMsg(data.message || (r.ok ? "Erfolgreich abonniert!" : "Fehler."));
    } catch {
      setMsg("Netzwerkfehler.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h2 className="text-center md:uppercase text-primary">
        Erhalte 10 % Rabatt auf deine erste Bestellung
      </h2>
      <p className="text-center text-sm md:text-xl text-primary">
        Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.
      </p>

      <form onSubmit={onSubmit} className="flex gap-2 justify-center mt-4">
        <input
          className="bg-white rounded px-3 py-2 md:min-w-[400px] border"
          type="email"
          name="EMAIL"
          autoComplete="email"
          placeholder="E-Mail-Adresse eingeben"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded bg-primary text-white"
        >
          {loading ? "Senden..." : "Abonnieren"}
        </button>
      </form>

      {msg && <div className="text-center mt-2">{msg}</div>}
    </section>
  );
}
