import Image from "next/image";

export default function BilgisayarDanismanligi() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Bilgisayar Danışmanlığı</h1>
      <Image
        src="/bilgisayar-danismanligi.jpg"
        alt="Bilgisayar Danışmanlığı"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        Bilgisayar danışmanlığı hizmetleri; işletmelerin bilişim altyapılarını
        güçlendirmek, sistemsel sorunları çözmek, kurulum ve optimizasyon
        süreçlerini profesyonel şekilde yönetmek için sunulur. Donanım ve yazılım
        ihtiyaçlarınız doğrultusunda özel çözümler üreterek verimliliğinizi artırır.
      </p>
      <p className="text-slate-700 leading-relaxed mt-4">
        Bu hizmet kapsamında; bilgisayar ve ağ sistemlerinin kurulumu, bakım
        planlaması, performans iyileştirmeleri, güvenlik yapılandırmaları ve
        lisanslama süreçleri profesyonel şekilde yönetilir. Böylece şirketler, teknik
        sorunlarla vakit kaybetmeden iş süreçlerine odaklanabilir.
      </p>
    </div>
  );
}
