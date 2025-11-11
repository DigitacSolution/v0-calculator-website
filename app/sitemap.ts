import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calculatorhub.com" // Replace with your actual domain

  // Main pages
  const routes = ["", "/about", "/contact", "/privacy", "/terms", "/disclaimer"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
