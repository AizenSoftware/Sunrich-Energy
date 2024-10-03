import Image from 'next/image'
import { Instagram, Mail, MapPin } from 'lucide-react'

export default function Component() {
  return (
    <div className="relative min-h-screen bg-sky-200">
      <Image
        src="/images/bg-image.png"
        alt="Solar panels on a roof with mountains in the background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto text-center space-y-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-500 mt-8 font-brittany">
            Enerjinin En İyi Hali
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-orange-500">
            SUNRICH ENERJİ
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-red-500 to-orange-400 rounded-lg p-6 mt-8 mb-12 text-white">
          <ul className="space-y-2 text-base md:text-lg text-black font-medium">
            <li>• Ag-Og elektrik aboneliği işlemleriniz için Elektrik Mühendisliği Hizmeti mi almak istiyorsunuz ?</li>
            <li>• Çatı-Arazi On-Grid Ges (Güneş Enerji Santrali) projeleriniz için danışmanlık hizmeti mi almak istiyorsunuz ?</li>
            <li>• Off-Grid Ges (Güneş Enerji Santrali) projeleriniz için alacağınız ürünleri doğru ve güvenle mi tedarik etmek istiyorsunuz ?</li>
            <li>• Tarımsal sulamanızı Ges (Güneş Enerji Santrali) ile mi sağlamak istiyorsunuz ?</li>
            <li>• Elektrik kumanda panosuna mı ihtiyacınız var ?</li>
          </ul>
          <h3 className="text-xl md:text-2xl mt-4 text-center text-black font-medium">
            ELEKTRİĞE DAİR TÜM İHTİYAÇLARINIZI KARŞILIYORUZ
          </h3>
        </div>
        <div className="w-full max-w-4xl bg-gradient-to-r from-orange-400 to-red-500 mx-auto flex flex-wrap justify-center items-center gap-4 text-red-600 p-2 rounded-xl">
          <a href="https://www.instagram.com/sunrichenerji/" target='_blank' className="flex items-center gap-2 text-black">
            <Instagram className="w-8 h-8" />
            <span>sunrichenerji</span>
          </a>
          <a href="mailto:yesilatiye@gmail.com" target='_blank' className="flex items-center gap-2  text-black">
            <Mail className="w-8 h-8" />
            <span>yesilatiye@gmail.com</span>
          </a>
          <div className="flex items-center gap-2  text-black">
            <MapPin className="w-8 h-8" />
            <span>Gürselpaşa Mah. 75291. Sk. Sercanpark2 Sitesi B Blok K:2 D:4 Seyhan/Adana</span>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-20">
          <Image  src="/images/sunrich-image.png"
          alt="Solar panels on a roof with mountains in the background"
          width={150}
          height={150}
          objectFit="cover"
          className='hidden lg:block'
        />
      </div>
    </div>
  )
}
       