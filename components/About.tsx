'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                រក្សាបេតិកភណ្ឌខ្មែរ
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                នៅភូមិកសិករខ្មែរ យើងមានការប្តេជ្ញាចិត្តក្នុងការរក្សា និងចែករំលែក 
                រសជាតិពិតប្រាកដ និងសិប្បកម្មប្រពៃណីនៃប្រទេសកម្ពុជាទៅកាន់ពិភពលោក។
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                ដំណើរការរបស់យើងបានចាប់ផ្តើមពីភូមិជនបទនៃប្រទេសកម្ពុជា ដែលយើងបានរកឃើញ 
                សិប្បកម្ម និងការអនុវត្តន៍កសិកម្មដ៏អស្ចារ្យដែលត្រូវបានបញ្ជូនពីជំនាន់មួយទៅជំនាន់មួយ។ 
                យើងធ្វើការដោយផ្ទាល់ជាមួយកសិករ និងសិប្បករក្នុងស្រុក ដើម្បីនាំយកផលិតផល 
                ដែលមានគុណភាពល្អបំផុតមកឱ្យអ្នក ខណៈពេលដែលគាំទ្រការរស់នៅប្រកបដោយនិរន្តភាព។
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                ផលិតផលទាំងអស់របស់យើង សុទ្ធតែនាំយកនូវរឿងរ៉ាវនៃប្រពៃណី គុណភាព និងសហគមន៍។ 
                ពីបាយជាស្មីដែលមានក្លិនក្រអូបដែលដាំដុះនៅវាលទំនាបដ៏មានជីជាតិនៃបាត់ដំបង 
                រហូតដល់ក្រណាត់រ៉ែសេដែលកន្សោមយ៉ាងស្រស់ស្អាតដែលត្រូវបានយកដោយ 
                សិប្បករជំនាញនៅសៀមរាប គ្រប់របស់សុទ្ធតែតំណាងឱ្យបេតិកភណ្ឌវប្បធម៌ដ៏សម្បូរបែបនៃប្រទេសកម្ពុជា។
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">២០០+</div>
                <div className="text-sm text-gray-500">កសិករក្នុងស្រុក</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">១៥</div>
                <div className="text-sm text-gray-500">ខេត្ត</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">៥០+</div>
                <div className="text-sm text-gray-500">ផលិតផល</div>
              </div>
            </div>
          </motion.div>
          
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/rice-farmer.jpg"
                    alt="Rice Farmer"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/silk-weaving.jpg"
                    alt="Silk Weaving"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/spice-market.jpg"
                    alt="Spice Market"
                    width={300}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/village-life.jpg"
                    alt="Village Life"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">២៥+</div>
                <div className="text-sm text-gray-500">ឆ្នាំបទពិសោធន៍</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
