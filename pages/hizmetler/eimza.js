import Image from "next/image";

export default function EImza() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">E-İmza</h1>
      <Image
        src="/e-imza.jpg"
        alt="E-İmza"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        E-İmza, 5070 sayılı Elektronik İmza Kanunu kapsamında ıslak imza ile aynı
        hukuki geçerliliğe sahip olan dijital imzadır. Elektronik ortamda belge
        imzalama, başvuru yapma, sözleşme onaylama gibi işlemleri hızlı ve güvenli
        bir şekilde gerçekleştirmenizi sağlar. Resmî kurumlarda ve özel sektörde
        yaygın olarak kullanılmaktadır.
      </p>
    </div>
  );
}
