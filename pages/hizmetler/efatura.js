import Image from "next/image";

export default function EFatura() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">E-Fatura</h1>
      <Image
        src="/e-fatura.png"
        alt="E-Fatura"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        E-Fatura, kağıt faturaların elektronik ortamda oluşturulması ve gönderilmesi
        sistemidir. GİB standartlarına uygun şekilde hazırlanır. Maliyetleri düşürür,
        hız kazandırır ve çevre dostudur. Şirketlerin arşivleme yükünü azaltır.
      </p>
    </div>
  );
}
