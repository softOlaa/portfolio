import React from 'react'
import { motion } from 'framer-motion'
import BackgroundAnimation from './BackgroundAnimation'

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center" id="hero">
      <BackgroundAnimation />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
          <h1 className="text-5xl sm:text-6xl font-bold">
            Hi, I'm <span className="text-blue-400">Olanrewaju Omoniyi</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Software Developer | Full-Stack Engineer</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 bg-blue-500 text-white rounded-md shadow hover:scale-105 transition-transform">View Projects</a>
            <a href="#contact" className="px-5 py-3 bg-gray-700 text-white rounded-md shadow hover:scale-105 transition-transform">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
