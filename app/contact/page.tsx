'use client'

import { useState } from 'react'
import GradientDecorationBg from '../src/components/GradientDecorationBg'
import GradientDecorationBgDown from '../src/components/GradientDecorationBgDown'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('https://formspree.io/f/xldozdzy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          projectType: '',
          message: '',
        })
      } else {
        alert('Something went wrong, please try again.')
      }
    } catch {
      alert('Error sending message. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <GradientDecorationBg />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let’s build something together
        </h2>
        <p className="mt-2 text-lg text-gray-400">
          Interested in working with me or have a project idea? Send me a message and I’ll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Aaron"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 ${errors.firstName ? 'outline-red-500' : 'outline-white/10'
                  } focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500`}
              />
              {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Salinas"
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 ${errors.lastName ? 'outline-red-500' : 'outline-white/10'
                  } focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500`}
              />
              {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 ${errors.email ? 'outline-red-500' : 'outline-white/10'
                  } focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500`}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Project Type */}
          <div className="sm:col-span-2">
            <label htmlFor="projectType" className="block text-sm font-semibold text-white">
              Project type
            </label>
            <div className="mt-2.5">
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-400 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              >
                <option value="">Select a project</option>
                <option>Website development</option>
                <option>React app</option>
                <option>Next.js project</option>
                <option>UI/UX design</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your idea or project..."
                value={formData.message}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 outline-1 -outline-offset-1 ${errors.message ? 'outline-red-500' : 'outline-white/10'
                  } focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500`}
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isSubmitting ? 'bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] cursor-not-allowed' : 'bg-gradient-to-tr from-[#ff80b5] duration-300 to-[#9089fc] hover:opacity-80'
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
          )}
        </div>
      </form>

      <GradientDecorationBgDown />
    </div>
  )
}
