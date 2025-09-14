import React from 'react'
import { motion } from 'framer-motion'

export default function Resume(){
  return (
    <section className="py-16" id="resume">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 className="text-3xl font-semibold mb-6" initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}} viewport={{once:true}}>Resume</motion.h2>
        <motion.a href="/resume.pdf" download className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:scale-105 transition-transform" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}} viewport={{once:true}}>Download Resume</motion.a>
      </div>
    </section>
  )
}
