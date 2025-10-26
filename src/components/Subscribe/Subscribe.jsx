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
    <section className="bg-secondary md:bg-transparent flex flex-col justify-center items-center p-2 max-w-82  md:max-w-175 m-auto rounded-2xl text-center ">
      <h2 className="uppercase text-white md:text-primary">
        Erhalte 10 % Rabatt auf deine erste Bestellung
      </h2>
      <p className="text-sm md:text-xl text-white md:text-primary">
        Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.
      </p>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:max-w-150 px-3 md:p-3 md:flex-row gap-2 mt-3 justify-center items-center md:bg-promo rounded-xl   md:shadow-medium"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse eingeben"
          required
          className="min-h-11 w-full md:min-w-100 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn max-w-30 md:px-4 bg-tertiary text-primary  md:bg-primary md:text-white md:max-w-40"
        >
          {loading ? "Senden..." : "Abonnieren"}
        </button> 
      </form>

      {msg && <p className="text-sm text-gray-800 mt-2">{msg}</p>}
    </section>
  );
}
