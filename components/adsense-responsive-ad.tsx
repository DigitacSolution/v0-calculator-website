"use client"

import { useEffect, useRef, useState } from "react"

interface AdSenseResponsiveAdProps {
  slot: string
  format?: string
  responsive?: boolean
}

export default function AdSenseResponsiveAd({ slot, format = "auto", responsive = true }: AdSenseResponsiveAdProps) {
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
      // Silently handle AdSense errors in development environment
    }
  }, [slot, isMounted])

  return (
    <div ref={adRef} className="my-6 flex justify-center min-w-[300px] min-h-[250px]">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "300px", minHeight: "250px" }}
        data-ad-client={`ca-pub-YOUR_PUBLISHER_ID`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  )
}
