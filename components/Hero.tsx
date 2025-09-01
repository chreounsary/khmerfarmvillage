'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('/images/patterns/khmer-pattern.svg')] opacity-10"></div>
      
      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              ផលិតផល{' '}
              <span className="text-secondary-300">ខ្មែរ</span>{' '}
              ពិតប្រាកដ
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              រកមើលរសជាតិដ៏ពិសេស និងសិប្បកម្មប្រពៃណីនៃប្រទេសកម្ពុជា។ 
              ពីបាយជាស្មីដែលមានគុណភាពល្អ រហូតដល់ក្រណាត់រ៉ែសេ្រដែលកែច្នៃដោយដៃ 
              សូមស្វាគមន៍ការស្វែងយល់អំពីរសជាតិនៃជីវិតភូមិពិតប្រាកដ។
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products" className="btn-secondary">
                មើលផលិតផល
              </Link>
              <Link href="#about" className="btn-outline text-white border-white hover:bg-white hover:text-primary-600">
                ស្វែងយល់បន្ថែម
              </Link>
            </motion.div>
            
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-300">១០០%</div>
                <div className="text-sm text-primary-100">ពិតប្រាកដ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-300">៥០+</div>
                <div className="text-sm text-primary-100">ផលិតផល</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-300">២៤/៧</div>
                <div className="text-sm text-primary-100">ការគាំទ្រ</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/cambodian-village.jpg"
                alt="Cambodian Village"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with play button for video */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300"
                >
                  <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-4 top-1/4 bg-white rounded-lg p-4 shadow-lg hidden lg:block"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-xl">🌾</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">បាយអង្ករធម្មជាតិ</div>
                  <div className="text-sm text-gray-500">ស្រស់ពីចម្ការ</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-lg p-4 shadow-lg hidden lg:block"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <span className="text-secondary-600 text-xl">🧵</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">សិប្បកម្មរ៉ែសេ</div>
                  <div className="text-sm text-gray-500">ធ្វើដោយដៃ</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
