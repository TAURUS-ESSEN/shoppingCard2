export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { email } = req.body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Ungültige E-Mail." });
  }

  try {
    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // <- ENV в Vercel
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,                 // обновлять, если уже есть
        listIds: [Number(process.env.BREVO_LIST_ID)], // ID списка из Brevo
      }),
    });

    const out = await resp.json();
    if (!resp.ok) {
      return res.status(resp.status).json({ message: out.message || "Brevo error" });
    }

    return res.status(200).json({ message: "Danke! Bitte bestätige die E-Mail." });
  } catch (e) {
    return res.status(500).json({ message: "Serverfehler." });
  }
}
