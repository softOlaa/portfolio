import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaPhp,
  FaAngular, FaVuejs, FaSwift, FaRust, FaGitAlt, FaDocker, FaLinux, FaApple, FaWindows
} from 'react-icons/fa';
import {
  SiCplusplus, SiTypescript, SiGo, SiKotlin, SiRuby, SiDart, SiScala, SiSvelte, SiFirebase, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiRedux, SiJquery
} from 'react-icons/si';

const icons = [
  { id: 1, Icon: FaReact, className: 'text-blue-400', top: '12%', left: '8%' },
  { id: 2, Icon: FaNodeJs, className: 'text-green-500', top: '36%', left: '78%' },
  { id: 3, Icon: FaHtml5, className: 'text-orange-500', top: '68%', left: '18%' },
  { id: 4, Icon: FaCss3Alt, className: 'text-blue-600', top: '58%', left: '86%' },
  { id: 5, Icon: FaJsSquare, className: 'text-yellow-400', top: '28%', left: '50%' },
  { id: 6, Icon: FaPython, className: 'text-blue-500', top: '20%', left: '60%' },
  { id: 7, Icon: FaJava, className: 'text-red-600', top: '75%', left: '70%' },
  { id: 8, Icon: SiCplusplus, className: 'text-indigo-500', top: '45%', left: '30%' },
  { id: 9, Icon: SiTypescript, className: 'text-blue-700', top: '60%', left: '40%' },
  { id: 10, Icon: FaPhp, className: 'text-purple-500', top: '10%', left: '85%' },
  // Additional 15 icons below
  // { id: 11, Icon: FaAngular, className: 'text-red-500', top: '15%', left: '25%' },
  // { id: 12, Icon: FaVuejs, className: 'text-green-400', top: '80%', left: '10%' },
  // { id: 13, Icon: SiGo, className: 'text-cyan-500', top: '30%', left: '65%' },
  // { id: 14, Icon: SiKotlin, className: 'text-purple-400', top: '55%', left: '55%' },
  // { id: 15, Icon: SiRuby, className: 'text-red-400', top: '70%', left: '80%' },
  // { id: 16, Icon: SiDart, className: 'text-blue-400', top: '25%', left: '35%' },
  // { id: 17, Icon: SiScala, className: 'text-red-700', top: '40%', left: '10%' },
  // { id: 18, Icon: SiSvelte, className: 'text-orange-600', top: '85%', left: '50%' },
  // { id: 19, Icon: SiFirebase, className: 'text-yellow-500', top: '60%', left: '60%' },
  // { id: 20, Icon: SiMongodb, className: 'text-green-700', top: '35%', left: '90%' },
  // { id: 21, Icon: SiMysql, className: 'text-blue-500', top: '50%', left: '75%' },
  { id: 22, Icon: SiPostgresql, className: 'text-blue-800', top: '80%', left: '30%' },
  { id: 23, Icon: SiGraphql, className: 'text-pink-500', top: '10%', left: '60%' },
  { id: 24, Icon: SiRedux, className: 'text-purple-700', top: '65%', left: '15%' },
  { id: 25, Icon: SiJquery, className: 'text-blue-400', top: '20%', left: '75%' },
  { id: 26, Icon: FaSwift, className: 'text-orange-400', top: '75%', left: '55%' },
  { id: 27, Icon: FaRust, className: 'text-orange-900', top: '40%', left: '60%' },
  { id: 28, Icon: FaGitAlt, className: 'text-orange-700', top: '55%', left: '20%' },
  { id: 29, Icon: FaDocker, className: 'text-blue-400', top: '30%', left: '20%' },
  { id: 30, Icon: FaLinux, className: 'text-black', top: '90%', left: '70%' },
  { id: 31, Icon: FaApple, className: 'text-gray-500', top: '5%', left: '40%' },
  { id: 32, Icon: FaWindows, className: 'text-blue-600', top: '5%', left: '70%' },
];

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, Icon, className, top, left }) => (
        <motion.div
          key={id}
          className={`absolute ${className}`}
          style={{ top, left }}
          initial={{ scale: 1, opacity: 0.6, y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2 + (id % 8), repeat: Infinity, ease: 'easeInOut' }} // Even faster animation
          whileHover={{ scale: 1.4, rotate: 12, opacity: 1, pointerEvents: 'auto' }}
        >
          <div className="pointer-events-auto">
            <Icon size={44} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
