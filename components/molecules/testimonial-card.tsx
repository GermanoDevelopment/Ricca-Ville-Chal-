import { Image } from "@/components/atoms/image"

interface TestimonialCardProps {
  imageSrc: string
  imageAlt: string
  clientName?: string
  date?: string
  className?: string
}

export function TestimonialCard({ imageSrc, imageAlt, clientName, date, className = "" }: TestimonialCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {(clientName || date) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <div className="text-white">
            {clientName && <p className="font-medium text-sm">{clientName}</p>}
            {date && <p className="text-xs opacity-80">{date}</p>}
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
