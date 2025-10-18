import Image from "next/image";

export default function MaliMuhur() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Mali Mühür</h1>
      <Image
        src="/mali-muhur.jpeg"
        alt="Mali Mühür"
        width={800}
        height={400}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-slate-700 leading-relaxed">
        Mali mühür, tüzel kişilere Gelir İdaresi Başkanlığı tarafından verilen,
        elektronik belgelerin kaynağını ve bütünlüğünü doğrulayan sertifikadır.
        E-Fatura, E-Defter ve benzeri uygulamalarda kimlik doğrulama ve belge
        güvenliği için zorunludur.
      </p>
    </div>
  );
}
