"use client"

import { useEffect, useRef, useState } from "react"

interface AdSenseHorizontalAdProps {
  slot: string
  width?: number
  height?: number
}

export default function AdSenseHorizontalAd({ slot, width = 728, height = 90 }: AdSenseHorizontalAdProps) {
  const [isMounted, setIsMounted] = useState(false)
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    try {
      // Check if container has width before pushing ad
      if (adRef.current && adRef.current.offsetWidth > 0) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      // Silently handle AdSense errors in development
    }
  }, [slot, isMounted])

  return (
    <div ref={adRef} className="flex justify-center my-6 overflow-x-auto" style={{ minWidth: `${width}px` }}>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: `${width}px`,
          height: `${height}px`,
        }}
        data-ad-client={`ca-pub-YOUR_PUBLISHER_ID`}
        data-ad-slot={slot}
      />
    </div>
  )
}
