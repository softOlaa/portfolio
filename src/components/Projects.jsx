import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa' // <-- Add this import

const projects = [
  {
    title: 'HydroSim — Hydrogen Fuel Cell Simulator',
    desc: 'A simulation dashboard modeling electricity generation for coastal regions using hydrogen fuel cells. Includes interactive charts and exportable reports.',
    tech: ['React','Python','Flask','Chart.js','Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'DevLinkr — Developer Portfolio Platform',
    desc: 'A Tailwind CSS + React portfolio platform with project management and contact integration.',
    tech: ['React','Tailwind','Vite'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Taskly — Productivity App',
    desc: 'A small task manager with localStorage persistence and simple analytics.',
    tech: ['React','LocalStorage','CSS'],
    github: '#',
    demo: '#'
  }
]

export default function Projects(){
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-semibold mb-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}}>Projects</motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:i*0.15}} viewport={{once:true}}>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>)}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.github} className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <FaGithub /> 
                  Source
                </a>
                <a href={p.demo} className="px-3 py-2 bg-blue-600 text-white rounded">Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
