"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-foreground text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">General Inquiries</h3>
            <p className="text-muted-foreground leading-relaxed">
              Questions about our calculators or how to use them? Fill out the form and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Feature Requests</h3>
            <p className="text-muted-foreground leading-relaxed">
              Want to see a new calculator or feature? Let us know what would be helpful for you and your needs.
            </p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">Your message has been received. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-2"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-[150px]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Other Ways to Connect</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-card px-6 py-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Report a Bug</p>
              <p className="text-foreground">Use the contact form above</p>
            </div>
            <div className="bg-card px-6 py-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Business Inquiries</p>
              <p className="text-foreground">Use the contact form above</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
