/**
 * Type definitions for the application
 */

export interface Service {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  features: string[]
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    postcode: string
  }
  businessHours: {
    weekday: string
    saturday: string
    sunday: string
  }
}

export interface NavigationItem {
  label: string
  link: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
}