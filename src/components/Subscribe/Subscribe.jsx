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
    <section className="bg-secondary md:bg-transparent flex flex-col justify-center items-center gap-2 md:gap-5 p-2 max-w-[330px]  md:max-w-[700px] m-auto rounded-2xl">
      <h2 className="text-center md:uppercase text-white md:text-primary">
        Erhalte 10 % Rabatt auf deine erste Bestellung
      </h2>
      <p className="text-center text-sm md:text-xl text-white md:text-primary">
        Plus exklusiven Zugang zu Neuheiten, Kochrezepten und Buchverlosungen.
      </p>
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mt-3 justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse eingeben"
          required
          className="bg-white  md:min-w-[400px] focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn max-w-25 bg-tertiary text-primary  md:bg-primary md:text-white md:max-w-40"
        >
          {loading ? "Senden..." : "Abonnieren"}
        </button> 
      </form>

      {msg && <p className="text-sm text-gray-800 mt-2">{msg}</p>}
    </section>
  );
}
