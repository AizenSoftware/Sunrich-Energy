import Image from "next/image"
import { Mail, MapPin, Instagram } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ss.jpg"
          alt="Solar panels on a roof with mountains in the background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
      </div>
      <div className="relative z-10 flex-grow flex flex-col items-center justify-between p-6 text-gray-100">
        <header className="w-full max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-4xl md:text-6xl font-bold text-orange-500" style={{ fontFamily: "'Brush Script MT', cursive" }}>Sunrich Enerji</div>
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center">
          <Image width={120} height={120} objectFit="cover" src="/images/sunrich-image.png" alt="Sunrich Image" />
          </div>
        </header>
        
        <main className="w-full max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 drop-shadow-lg" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Enerjinin En İyi Hali
          </h1>
          
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-gray-200">
            <ul className="text-left space-y-2 ">
              <li>• Elektrik Mühendisliği Hizmeti</li>
              <li>• Çatı-Arazi On-Grid GES (Güneş Enerji Santrali) projeleri için danışmanlık</li>
              <li>• Off-Grid GES (Güneş Enerji Santrali) projeleri için ürün tedariki</li>
              <li>• Tarımsal sulama için GES (Güneş Enerji Santrali) çözümleri</li>
              <li>• Elektrik kumanda panosu ihtiyaçları</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">ELEKTRİĞE DAİR TÜM İHTİYAÇLARINIZI KARŞILIYORUZ</p>
          </div>
        </main>
        
        <footer className="w-full max-w-6xl mx-auto flex flex-wrap justify-between items-center text-lg text-gray-300 space-y-2">
          <div className="flex items-center space-x-2">
            <Instagram size={30} className="text-orange-500" />
            <span className="text-base md:text-lg ">sunrichenerji</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={30} className="text-orange-500" />
            <span className="text-base md:text-lg">yesilatiye@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={30} className="text-orange-500" />
            <span className="text-base md:text-lg">Gürselpaşa Mah. 75291. Sk. Sercanpark2 Sitesi B Blok K:2 D:4 Seyhan/Adana</span>
          </div>
        </footer>
      </div>
    </div>
  )
}