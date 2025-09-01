import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'
import { HiStar, HiHeart, HiEye } from 'react-icons/hi'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-2">
            <Link
              href={`/products/${product.id}`}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-primary-50 transition-colors inline-block"
            >
              <HiEye className="h-5 w-5 text-primary-600" />
            </Link>
            <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
              <HiHeart className="h-5 w-5 text-red-500" />
            </button>
          </div>
        </div>
        {/* Badge */}
        {product.certifications && product.certifications.includes('Organic') && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            កសិកម្មធម្មជាតិ
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary-600 font-medium">{product.category}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="h-4 w-4 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            {product.origin}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <Link
            href={`/products/${product.id}`}
            className="btn-primary flex-1 text-center text-sm py-2"
          >
            មើលលម្អិត
          </Link>
          <button className="btn-outline text-sm py-2 px-4">
            ទំនាក់ទំនង
          </button>
        </div>
      </div>
    </div>
  )
}
