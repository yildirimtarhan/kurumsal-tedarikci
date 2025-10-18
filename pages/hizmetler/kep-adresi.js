import Image from "next/image";

export default function KEPAdresi() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">KEP Adresi</h1>
      <Image
        src="/kep-adresi.jpg"
        alt="KEP Adresi"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        Kayıtlı Elektronik Posta (KEP), elektronik ortamda gönderilen mesajların
        yasal geçerlilik kazanmasını sağlayan sistemdir. Gönderici ve alıcı
        arasında zaman damgası, içerik bütünlüğü ve kimlik doğrulaması sağlar.
        Resmî tebligatlarda kullanımı zorunludur.
      </p>
    </div>
  );
}
