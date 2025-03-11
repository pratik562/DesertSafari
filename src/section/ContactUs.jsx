'use client'

import { Button, InputField } from '@/components'
import { handleToast, sendEmail, validateForm } from '@/utils/GobalFun'
import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Function to generate form fields
const getFormFields = [
  { label: 'Full Name', type: 'text', name: 'fullName', placeholder: 'Enter your full name' },
  { label: 'Subject', type: 'text', name: 'subject', placeholder: 'Enter subject' },
  { label: 'Email ID', type: 'email', name: 'email', placeholder: 'Enter your email' },
  { label: 'Mobile Number', type: 'tel', name: 'mobile', placeholder: 'Enter your phone number' }
]

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    mobile: ''
  })

  const [errors, setErrors] = useState({})
  const sectionRef = useRef(null)
  const formFieldsRef = useRef([])
  const buttonRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    gsap.fromTo(
      formFieldsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    )

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: 'elastic.out(1, 0.5)' }
    )
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm(formData, ['fullName', 'subject', 'email', 'mobile'])

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      handleToast('error', 'Please fill out all required fields correctly.')
    } else {
      setErrors({})
      await sendEmail(formData)
      handleToast('success', 'Your message has been sent successfully!')
      setFormData({ fullName: '', subject: '', email: '', mobile: '' })
    }
  }

  return (
    <section id='contact' ref={sectionRef} className='flex justify-center items-cente px-4 sm:px-8 py-10 opacity-0'>
      <div className='bg-primary-bg shadow-lg rounded-2xl p-8 w-full max-w-6xl'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-6'>
          Contact <span className='text-primary'>Us</span>
        </h2>

        <form className='grid grid-cols-1 sm:grid-cols-2 gap-6' onSubmit={handleSubmit}>
          {getFormFields?.map((field, index) => (
            <div key={field.name} ref={(el) => (formFieldsRef.current[index] = el)}>
              <InputField
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            </div>
          ))}

          <div className='col-span-1 sm:col-span-2' ref={buttonRef}>
            <Button
              fullwidth
              type='submit'
              label='Contact Us'
              className='font-semibold bg-primary hover:opacity-2 transition'
            />
          </div>
        </form>
      </div>
    </section>
  )
}
