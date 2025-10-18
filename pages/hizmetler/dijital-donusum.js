import Image from "next/image";

export default function DijitalDonusum() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Dijital Dönüşüm</h1>
      <Image
        src="/donusum.jpeg"
        alt="Dijital Dönüşüm"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        Dijital dönüşüm, kurumların iş süreçlerini dijital teknolojilerle yeniden
        yapılandırarak daha verimli, hızlı ve rekabetçi hale gelmesini sağlar.
        Otomasyon, bulut bilişim, yapay zekâ ve veri analitiği gibi teknolojiler bu
        dönüşümün temelini oluşturur.
      </p>
    </div>
  );
}
