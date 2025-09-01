import { HiMail, HiPhone, HiLocationMarker, HiClock, HiGlobeAlt } from 'react-icons/hi'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">ទំនាក់ទំនងជាមួយយើង</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <HiLocationMarker className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">អាសយដ្ឋាន</h4>
              <p className="text-gray-600 mt-1">
                ផ្លូវភូមិលេខ ១២៣, ភ្នំពេញ,<br />
                កម្ពុជា ១២០០០
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <HiPhone className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">លេខទូរស័ព្ទ</h4>
              <p className="text-gray-600 mt-1">
                +855 12 345 678<br />
                +855 98 765 432
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <HiMail className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">អ៊ីមែល</h4>
              <p className="text-gray-600 mt-1">
                info@khmerfarmvillage.com<br />
                sales@khmerfarmvillage.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <HiClock className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">ម៉ោងធ្វើការ</h4>
              <p className="text-gray-600 mt-1">
                ច័ន្ទ - សុក្រ: ៨:០០ ព្រឹក - ៦:០០ ល្ងាច<br />
                សៅរ៍: ៩:០០ ព្រឹក - ៤:០០ ល្ងាច<br />
                អាទិត្យ: បិទ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">ព័ត៌មានរហ័ស</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">ពេលវេលាឆ្លើយតប</span>
            <span className="text-primary-600 font-semibold">ក្នុងរយៈពេល ២៤ ម៉ោង</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">ភាសា</span>
            <span className="text-primary-600 font-semibold">អង់គ្លេស, ខ្មែរ</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">ការដឹកជញ្ជូន</span>
            <span className="text-primary-600 font-semibold">ទូទាំងពិភពលោក</span>
          </div>
        </div>
      </div>
    </div>
  )
}
