"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useMotionValue, useTransform } from "framer-motion"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  title: string
  description: string
}

export function ImageComparison({ beforeImage, afterImage, title, description }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const position = useTransform(x, [-150, 150], [0, 100])

  useEffect(() => {
    const updateSliderPosition = () => {
      position.set(sliderPosition)
    }
    updateSliderPosition()
  }, [position, sliderPosition])

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    let clientX: number
    if (event instanceof MouseEvent) {
      clientX = event.clientX
    } else {
      clientX = event.touches[0].clientX
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100
    const clampedPosition = Math.min(Math.max(position, 0), 100)
    setSliderPosition(clampedPosition)
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag)
      window.addEventListener("touchmove", handleDrag)
      window.addEventListener("mouseup", handleDragEnd)
      window.addEventListener("touchend", handleDragEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag)
      window.removeEventListener("touchmove", handleDrag)
      window.removeEventListener("mouseup", handleDragEnd)
      window.removeEventListener("touchend", handleDragEnd)
    }
  }, [isDragging])

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image src={beforeImage || "/placeholder.svg"} alt="До очистки" fill className="object-cover" />
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image src={afterImage || "/placeholder.svg"} alt="После очистки" fill className="object-cover" />
        </div>

        {/* Slider */}
        <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8L20 12M20 12L16 16M20 12H4"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">До</div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">После</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

