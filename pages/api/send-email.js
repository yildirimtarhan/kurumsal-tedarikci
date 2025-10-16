import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Yalnızca POST isteği desteklenir" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tüm alanlar zorunludur." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kurumsal Tedarikçi Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Yeni İletişim Mesajı: ${name}`,
      text: `
        İsim: ${name}
        E-posta: ${email}
        Mesaj: ${message}
      `,
    });

    return res.status(200).json({ message: "Mesaj başarıyla gönderildi." });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return res.status(500).json({ message: "Mail gönderilirken bir hata oluştu." });
  }
}
