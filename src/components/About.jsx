import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-semibold mb-4" initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>About Me</motion.h2>
        <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3, duration:0.8}} viewport={{once:true}}>
          I'm a software developer focused on building scalable web applications and intuitive user experiences.
          I enjoy working across the stack — from designing clean UI to building reliable backend services.
        </motion.p>

        <motion.h3 className="mt-6 text-2xl font-medium" initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}}>Skills</motion.h3>
        <motion.ul className="mt-3 flex flex-wrap gap-2" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3, duration:0.8}} viewport={{once:true}}>
          {['JavaScript','React','Node.js','HTML','CSS','Tailwind','SQL','Git'].map(s => (
            <li key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">{s}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
