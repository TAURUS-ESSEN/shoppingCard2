// /api/subscribe.js

export default async function handler(req, res) {
  // Разрешаем только POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body || {};

    // Проверяем email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Ungültige E-Mail-Adresse." });
    }

    console.log("Brevo API KEY:", !!process.env.BREVO_API_KEY);
    console.log("List ID:", process.env.BREVO_LIST_ID);

    // Отправляем запрос в Brevo API
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true, // обновить, если уже есть
        listIds: [Number(process.env.BREVO_LIST_ID)],
      }),
    });

    let data = null;
    try {
      data = await response.json(); // парсим, если не пусто
    } catch {
      data = null;
    }

    // Если не ок — возвращаем ошибку
    if (!response.ok) {
      console.error("Brevo API error:", data);
      return res
        .status(response.status)
        .json({ message: data?.message || "Brevo API Fehler." });
    }

    // Всё прошло успешно
    return res.status(200).json({ message: "Danke fürs Abonnieren!" });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Serverfehler." });
  }
}
