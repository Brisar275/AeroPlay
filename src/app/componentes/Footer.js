import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 md:px-40 font-[IBM.ttf] border-t border-gray-800 mt-10 font-[IBM.]">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-white font-bold text-2xl">
          AeroPlay
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-light">
          <Link href={"/"} className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">
            Inicio
          </Link>
          <Link href={"/"} className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">
            Populares
          </Link>
          <Link href={"/"} className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">
            Tendencia
          </Link>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 my-6"></div>

      <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">

        <p className="text-center md:text-right">
          Brisa Aimee Rodriguez
        </p>
      </div>
    </footer>
  )
}

export default Footer