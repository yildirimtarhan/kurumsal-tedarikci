import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Sadece POST istekleri kabul edilir" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tüm alanları doldurun" });
  }

  try {
    // SMTP transporter - Zoho Mail bilgileri
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu", // Zoho EU kullanıyorsan
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER, // örn: info@tedarikci.org.tr
        pass: process.env.ZOHO_PASS, // Zoho mail şifresi veya uygulama şifresi
      },
    });

    await transporter.sendMail({
      from: `"Kurumsal Tedarikçi Site" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER, // mesajları kendi info adresine gönder
      subject: `Yeni İletişim Mesajı - ${name}`,
      text: `
Ad Soyad: ${name}
E-posta: ${email}

Mesaj:
${message}
      `,
    });

    return res.status(200).json({ message: "Mesaj başarıyla gönderildi" });
  } catch (err) {
    console.error("Mail gönderim hatası:", err);
    return res.status(500).json({ message: "Mesaj gönderilirken bir hata oluştu" });
  }
}
