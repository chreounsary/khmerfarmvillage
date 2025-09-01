import { notFound } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/data/products'
import ProductGallery from '@/components/ProductGallery'
import ProductVideo from '@/components/ProductVideo'
import RelatedProducts from '@/components/RelatedProducts'
import { Metadata } from 'next'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.id === params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found - Khmer Farm Village'
    }
  }

  return {
    title: `${product.name} - Khmer Farm Village`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-primary-600">
                ${product.price}
              </p>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Origin:</strong> {product.origin}</li>
                <li><strong>Harvest Season:</strong> {product.harvestSeason}</li>
                {product.certifications && (
                  <li><strong>Certifications:</strong> {product.certifications.join(', ')}</li>
                )}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary flex-1">
                Contact for Pricing
              </button>
              <button className="btn-outline">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Product Video */}
        {product.videoUrl && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              See How It's Made
            </h2>
            <ProductVideo videoUrl={product.videoUrl} productName={product.name} />
          </div>
        )}

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </div>
    </div>
  )
}
