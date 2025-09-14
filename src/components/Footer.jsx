import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="py-6 bg-white dark:bg-gray-800 text-center">
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}}>© {new Date().getFullYear()} Olanrewaju Omoniyi. Built with React + Tailwind.</motion.p>
    </footer>
  )
}
