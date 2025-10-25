// /api/subscribe.js
    export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { email } = req.body || {};
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: "Ungültige E-Mail-Adresse." });
        }

        const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
            email,
            updateEnabled: true,
            listIds: [Number(process.env.BREVO_LIST_ID)],
        }),
        });

        const data = await response.json();

        if (!response.ok) {
        return res
            .status(response.status)
            .json({ message: data.message || "Brevo API Fehler." });
        }

        return res
        .status(200)
        .json({ message: "Danke! Bitte bestätige deine E-Mail-Adresse." });
    } catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({ message: "Serverfehler." });
    }
    };
