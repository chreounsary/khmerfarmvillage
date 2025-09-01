export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  videoUrl?: string
  origin: string
  harvestSeason: string
  certifications?: string[]
  featured: boolean
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 'cambodian-jasmine-rice',
    name: 'បាយជាស្មីខ្មែរពិសេស',
    description: 'បាយជាស្មីដែលមានក្លិនក្រអូបដាំដុះនៅចម្ការដ៏មានជីជាតិនៃប្រទេសកម្ពុជា។ ល្បីល្បាញដោយសារក្លិនក្រអូបស្រាល និងសម្បកដ៏ទន់ ធ្វើឱ្យបាយនេះល្អឥតខ្ចោះសម្រាប់ម្ហូបខ្មែរប្រពៃណី និងម្ហូបសម័យ។',
    price: 25.99,
    category: 'បាយ និងធញ្ញជាតិ',
    images: [
      '/images/products/jasmine-rice-1.jpg',
      '/images/products/jasmine-rice-2.jpg',
      '/images/products/jasmine-rice-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    origin: 'ខេត្តបាត់ដំបង កម្ពុជា',
    harvestSeason: 'ខែវិច្ឆិកា - មករា',
    certifications: ['ធម្មជាតិ', 'ពាណិជ្ជកម្មយុត្តិធម៌'],
    featured: true,
    inStock: true
  },
  {
    id: 'kampot-pepper',
    name: 'ម្រេចខ្មៅកំពត',
    description: 'ម្រេចកំពតដែលល្បីលើពិភពលោកដោយរសជាតិផ្លែឈើ និងក្លិនឯកាលីប្តុសតែមួយគត់។ គ្រឿងទេសដ៏មានគុណភាពនេះត្រូវបានប្រមូលដោយដៃ និងហាលដោយព្រះអាទិត្យដោយប្រើវិធីសាស្រ្តប្រពៃណីដែលបានសម្ពាធពីជំនាន់មួយទៅជំនាន់មួយ។',
    price: 45.99,
    category: 'គ្រឿងទេស និងម្សៅ',
    images: [
      '/images/products/kampot-pepper-1.jpg',
      '/images/products/kampot-pepper-2.jpg',
      '/images/products/kampot-pepper-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    origin: 'ខេត្តកំពត កម្ពុជា',
    harvestSeason: 'ខែកុម្ភៈ - ឧសភា',
    certifications: ['PDO គាំពារ', 'ធម្មជាតិ'],
    featured: true,
    inStock: true
  },
  {
    id: 'palm-sugar',
    name: 'ស្ករត្នោតប្រពៃណី',
    description: 'ស្ករត្នោតសុទ្ធសាធដែលស្រូបមកពីដើមត្នោត។ គ្រឿងផ្អែមធម្មជាតិនេះមានរសជាតិដ៏សម្បូរបែបដូចការ៉ាម៉ែល និងជាគ្រឿងផ្សំសំខាន់ក្នុងបង្អែម និងការធ្វើម្ហូបខ្មែរ។',
    price: 18.99,
    category: 'គ្រឿងផ្អែម',
    images: [
      '/images/products/palm-sugar-1.jpg',
      '/images/products/palm-sugar-2.jpg',
      '/images/products/palm-sugar-3.jpg'
    ],
    origin: 'ខេត្តកណ្តាល កម្ពុជា',
    harvestSeason: 'ពេញមួយឆ្នាំ',
    certifications: ['ធម្មជាតិ', 'ប្រភពនិរន្តភាព'],
    featured: true,
    inStock: true
  },
  {
    id: 'silk-scarf',
    name: 'ក្រណាត់រ៉ែសេដោយដៃ',
    description: 'ក្រណាត់រ៉ែសេដ៏ស្រស់ស្អាតដែលត្រូវបានកែច្នៃដោយសិប្បករក្នុងស្រុកដោយប្រើបច្ចេកទេសប្រពៃណី។ មានលក្ខណៈពិសេសគឺរបាំងស្មុគស្មាញដែលទទួលបានការបំផុសគំនិតពីអង្គរវត្ត និងវប្បធម៌ខ្មែរ។',
    price: 89.99,
    category: 'សិប្បកម្មដៃ',
    images: [
      '/images/products/silk-scarf-1.jpg',
      '/images/products/silk-scarf-2.jpg',
      '/images/products/silk-scarf-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    origin: 'ខេត្តសៀមរាប កម្ពុជា',
    harvestSeason: 'ពេញមួយឆ្នាំ',
    certifications: ['ពាណិជ្ជកម្មយុត្តិធម៌', 'ធ្វើដោយសិប្បករ'],
    featured: false,
    inStock: true
  },
  {
    id: 'dried-fish',
    name: 'ត្រីស្ងោរប្រពៃណី',
    description: 'ត្រីស្ងោរហាលដោយព្រះអាទិត្យដែលត្រូវបានរៀបចំដោយប្រើវិធីសាស្រ្តរក្សាទុកបុរាណ។ ជាអាហារដែលសម្បូរទៅដោយប្រូតេអ៊ីនដែលបន្ថែមរសជាតិ umami ដល់ស៊ុប ការី និងម្ហូបប្រពៃណី។',
    price: 32.99,
    category: 'អាហាររក្សាទុក',
    images: [
      '/images/products/dried-fish-1.jpg',
      '/images/products/dried-fish-2.jpg',
      '/images/products/dried-fish-3.jpg'
    ],
    origin: 'បឹងទន្លេសាប កម្ពុជា',
    harvestSeason: 'រដូវប្រាំង (វិច្ឆិកា - មេសា)',
    certifications: ['ជាប់ពីធម្មជាតិ', 'វិធីសាស្រ្តប្រពៃណី'],
    featured: false,
    inStock: true
  },
  {
    id: 'cashew-nuts',
    name: 'គ្រាប់កស្យូអាំង',
    description: 'គ្រាប់កស្យូពិសេសដែលដាំដុះនៅដីដ៏មានជីជាតិនៃប្រទេសកម្ពុជា។ ត្រូវបានអាំងយ៉ាងប្រុងប្រយ័ត្នដល់ភាពល្អឥតខ្ចោះ គ្រាប់ធញ្ញជាតិទាំងនេះសម្បូរទៅដោយរសជាតិ និងជីវជាតិ។',
    price: 28.99,
    category: 'គ្រាប់ធញ្ញជាតិ និងគ្រាប់',
    images: [
      '/images/products/cashew-nuts-1.jpg',
      '/images/products/cashew-nuts-2.jpg',
      '/images/products/cashew-nuts-3.jpg'
    ],
    origin: 'ខេត្តមណ្ឌលគីរី កម្ពុជា',
    harvestSeason: 'ខែមីនា - ឧសភា',
    certifications: ['ធម្មជាតិ', 'ពាណិជ្ជកម្មយុត្តិធម៌'],
    featured: true,
    inStock: true
  }
]

export const categories = [
  'ផលិតផលទាំងអស់',
  'បាយ និងធញ្ញជាតិ',
  'គ្រឿងទេស និងម្សៅ',
  'គ្រឿងផ្អែម',
  'សិប្បកម្មដៃ',
  'អាហាររក្សាទុក',
  'គ្រាប់ធញ្ញជាតិ និងគ្រាប់'
]
