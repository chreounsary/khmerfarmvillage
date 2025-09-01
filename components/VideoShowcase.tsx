'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const videos = [
  {
    id: '1852360302360761',
    title: 'ភូមិកសិកម្មខ្មែរ - វីដេអូប្រវត្តិសាស្រ្ត',
    type: 'facebook',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Fkhmerfarmvillage%2Fvideos%2F1852360302360761&show_text=false&width=800&height=450'
  },
  {
    id: '2464797510565604',
    title: 'រឿងរ៉ាវកសិកម្ម ១',
    type: 'facebook_reel',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F2464797510565604&show_text=false&width=400&height=600'
  },
  {
    id: '1441795753806746',
    title: 'រឿងរ៉ាវកសិកម្ម ២',
    type: 'facebook_reel',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1441795753806746&show_text=false&width=400&height=600'
  },
  {
    id: '684011388027491',
    title: 'រឿងរ៉ាវកសិកម្ម ៣',
    type: 'facebook_reel',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F684011388027491&show_text=false&width=400&height=600'
  },
  {
    id: '1064077791936421',
    title: 'រឿងរ៉ាវកសិកម្ម ៤',
    type: 'facebook_reel',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1064077791936421&show_text=false&width=400&height=600'
  }
]

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ជីវិតកសិកម្មប្រពៃណី
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ស្វែងយល់ពីដំណើរការធ្វើផលិតផលកម្ពុជាប្រពៃណីរបស់យើង
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600">
                រកមើលវីដេអូនេះដើម្បីស្វែងយល់បន្ថែមអំពីដំណើរការផលិតកម្មប្រពៃណីរបស់យើង។
              </p>
            </motion.div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">វីដេអូផ្សេងទៀត</h3>
            
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedVideo.id === video.id
                    ? 'bg-primary-50 border-2 border-primary-500'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {video.type === 'facebook_reel' ? 'Facebook Reel' : 'Facebook Video'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
