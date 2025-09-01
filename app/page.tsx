import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import About from '@/components/About'
import VideoShowcase from '@/components/VideoShowcase'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <VideoShowcase />
      <Newsletter />
    </>
  )
}
