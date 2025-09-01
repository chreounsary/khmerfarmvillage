'use client'

import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            រក្សាការតភ្ជាប់ជាមួយជីវិតភូមិ
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            ចុះឈ្មោះទទួលព្រឹត្តិប័ត្រសម្រាប់ការកែប្រែថ្មីៗអំពីផលិតផលថ្មី 
            រដូវប្រមូលផល និងរឿងរ៉ាវពីសហគមន៍កសិកម្មរបស់យើង។
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button className="btn-secondary rounded-l-none">
                ចុះឈ្មោះ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
