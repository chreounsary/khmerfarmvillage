import ProductGrid from '@/components/ProductGrid'
import ProductFilter from '@/components/ProductFilter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ផលិតផល - ភូមិកសិកម្មខ្មែរ',
  description: 'រកមើលផលិតផលកសិកម្មកម្ពុជាប្រពៃណី សិប្បកម្ម និងអាហារពិសេសពីភូមិរបស់យើង។',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ផលិតផលរបស់យើង
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            រកមើលផលិតផលកម្ពុជាប្រពៃណីដែលទទួលបានដោយផ្ទាល់ពីកសិករ និងសិប្បករមូលដ្ឋាន
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ProductFilter />
          </aside>
          <main className="lg:w-3/4">
            <ProductGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
