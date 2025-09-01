import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ទំនាក់ទំនង - ភូមិកសិកម្មខ្មែរ',
  description: 'ទំនាក់ទំនងជាមួយភូមិកសិកម្មខ្មែរ។ ទាក់ទងយើងសម្រាប់សំណួរអំពីផលិតផល ភាពជាដៃគូ ឬសំណួរណាមួយអំពីផលិតផលកម្ពុជាប្រពៃណីរបស់យើង។',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ទំនាក់ទំនង
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            យើងចង់ស្តាប់ពីអ្នក។ សូមទាក់ទងមកកាន់យើងសម្រាប់សំណួរណាមួយអំពីផលិតផល ឬសេវាកម្មរបស់យើង។
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
