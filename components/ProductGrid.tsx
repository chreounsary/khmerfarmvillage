'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { categories } from '@/data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All Products' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return b.featured ? 1 : -1
    }
  })

  return (
    <div className="space-y-6">
      {/* Sort and Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            Showing {sortedProducts.length} products
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sortedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            layout
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* No products found */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
