interface ProductVideoProps {
  videoUrl: string
  productName: string
}

export default function ProductVideo({ videoUrl, productName }: ProductVideoProps) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={videoUrl}
        title={`${productName} - Production Video`}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
