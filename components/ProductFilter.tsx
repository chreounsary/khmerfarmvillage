'use client'

import { useState } from 'react'
import { categories } from '@/data/products'

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [priceRange, setPriceRange] = useState([0, 100])

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ប្រភេទ</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-3 text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ជួរតម្លៃ</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              placeholder="តិចបំផុត"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="ច្រើនបំផុត"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">វិញ្ញាបនប័ត្រ</h3>
        <div className="space-y-2">
          {['កសិកម្មធម្មជាតិ', 'ការទិញលក់យុត្តិធម៌', 'ការពារ PDO', 'ធ្វើដោយសិប្បករ'].map((cert) => (
            <label key={cert} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{cert}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
