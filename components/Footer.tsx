import Link from 'next/link'
import { HiMail, HiPhone, HiLocationMarker, HiGlobeAlt } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="section-padding border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="font-display font-bold text-xl">
                  ភូមិកសិកម្មខ្មែរ
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                នាំផលិតផលកម្ពុជាប្រពៃណី និងសិប្បកម្មដើមកំពង់មកកាន់ពិភពលោក 
                ពេលជួយគាំទ្រសហគមន៍មូលដ្ឋាន។
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <HiGlobeAlt className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <HiMail className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <HiPhone className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <HiLocationMarker className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">ลิงក์រហ័ស</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    ទំព័រដើម
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                    ផលិតផល
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    អំពីយើង
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    ទំនាក់ទំនង
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="font-semibold mb-4">ប្រភេទផលិតផល</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    អង្ករ និងបាយ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    គ្រឿងទេស
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    សិប្បកម្ម
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    អាហារកំណប់
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">ពត៌មានទំនាក់ទំនង</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <HiLocationMarker className="h-5 w-5 mr-2 text-primary-400" />
                  ភ្នំពេញ កម្ពុជា
                </li>
                <li className="flex items-center text-gray-400">
                  <HiPhone className="h-5 w-5 mr-2 text-primary-400" />
                  +855 12 345 678
                </li>
                <li className="flex items-center text-gray-400">
                  <HiMail className="h-5 w-5 mr-2 text-primary-400" />
                  info@khmerfarmvillage.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ភូមិកសិកម្មខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                គោលនយោបាយឯកជនភាព
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                លក្ខខណ្ឌសេវាកម្ម
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                គោលនយោបាយ Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
