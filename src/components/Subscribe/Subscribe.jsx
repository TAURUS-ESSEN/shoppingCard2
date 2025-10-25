import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMsg(data.message || "Unbekannte Antwort");
    } catch {
      setMsg("Netzwerkfehler.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex flex-col items-center gap-3 text-center my-10">
      <h2 className="text-2xl font-bold text-primary uppercase">
        Erhalte 10 % Rabatt auf deine erste Bestellung
      </h2>
      <p className="text-base text-gray-700">
        Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mt-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse eingeben"
          required
          className="border rounded px-3 py-2 w-72 md:w-96 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition"
        >
          {loading ? "Senden..." : "Abonnieren"}
        </button>
      </form>

      {msg && <p className="text-sm text-gray-800 mt-2">{msg}</p>}
    </section>
  );
}
