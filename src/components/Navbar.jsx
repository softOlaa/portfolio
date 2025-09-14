import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function Navbar({ theme, setTheme }){
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white/50 dark:bg-gray-800/60 backdrop-blur sticky top-0 z-20">
      <div className="text-lg font-semibold">Olanrewaju Omoniyi</div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-4">
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#resume" className="text-sm">Resume</a>
          <a href="#contact" className="text-sm">Contact</a>
        </div>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
          title="Toggle dark / light"
        >
          {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
        </button>
      </div>
    </nav>
  )
}
