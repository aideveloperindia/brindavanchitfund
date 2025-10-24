'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/LOGO.png"
              alt="Brindavan Chits Logo"
              width={60}
              height={60}
              className="mr-3"
            />
            <div>
              <h1 className="text-lg font-bold text-green-700">Brindavan Chits</h1>
              <p className="text-xs text-gray-600">Karimnagar (India) Pvt. Ltd.</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href='/' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>Home</Link>
            <Link href='/about' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>About</Link>
            <Link href='/schedules' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>Schedules</Link>
            <Link href='/team' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>Team</Link>
            <Link href='/how-it-works' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>How It Works</Link>
            <Link href='/gallery' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>Gallery</Link>
            <Link href='/contact' className='text-gray-700 hover:text-green-700 transition-colors font-medium'>Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href='/' className='block px-3 py-2 text-gray-700 hover:text-green-700'>Home</Link>
              <Link href='/about' className='block px-3 py-2 text-gray-700 hover:text-green-700'>About</Link>
              <Link href='/schedules' className='block px-3 py-2 text-gray-700 hover:text-green-700'>Schedules</Link>
              <Link href='/team' className='block px-3 py-2 text-gray-700 hover:text-green-700'>Team</Link>
              <Link href='/how-it-works' className='block px-3 py-2 text-gray-700 hover:text-green-700'>How It Works</Link>
              <Link href='/gallery' className='block px-3 py-2 text-gray-700 hover:text-green-700'>Gallery</Link>
              <Link href='/contact' className='block px-3 py-2 text-gray-700 hover:text-green-700'>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
