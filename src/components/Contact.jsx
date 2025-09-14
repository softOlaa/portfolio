import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const form = useRef()
  const [success, setSuccess] = useState(null)
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // replace
      'YOUR_TEMPLATE_ID', // replace
      form.current,
      'YOUR_PUBLIC_KEY' // replace
    ).then((result) => {
      console.log(result.text)
      setSuccess(true)
      form.current.reset()
    }).catch((err) => {
      console.error(err.text)
      setSuccess(false)
    }).finally(() => setSending(false))
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-semibold mb-6" initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}}>Contact Me</motion.h2>

        <motion.form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow p-6 rounded-lg space-y-4" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} viewport={{once:true}}>
          <input name="name" type="text" required placeholder="Your Name" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700" />
          <input name="email" type="email" required placeholder="Your Email" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700" />
          <textarea name="message" rows="5" required placeholder="Your Message" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700" />
          <div className="flex items-center gap-4">
            <button type="submit" disabled={sending} className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:scale-105 transition-transform">
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {success === true && <span className="text-green-600">Message sent ✅</span>}
            {success === false && <span className="text-red-500">Failed to send ❌</span>}
          </div>
        </motion.form>

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>Or find me on: <a href="#" className="text-blue-500">GitHub</a> · <a href="#" className="text-blue-500">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}
