'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    members: 0,
    users: 0,
    years: 0
  })

  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Fade in effect for main text
    setTimeout(() => setShowText(true), 500)
    
    // Typing animation for numbers
    const animateNumber = (target: number, key: keyof typeof animatedNumbers, duration: number = 2000) => {
      const start = 0
      const increment = target / (duration / 50)
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAnimatedNumbers(prev => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 50)
    }

    // Start animations with delays
    setTimeout(() => animateNumber(30000, 'members'), 1000)
    setTimeout(() => animateNumber(2500, 'users'), 1500)
    setTimeout(() => animateNumber(17, 'years'), 2000)
  }, [])
  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* 🏠 HOME SECTION */}
      <section className='pt-24 p-6 text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-3000 ${showText ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-95'}`}>
            <h1 className='text-5xl md:text-6xl font-bold text-green-700 mb-6 leading-tight'>
              Brindavan Chits<br />
              <span className="text-3xl md:text-4xl">Karimnagar (India) Pvt. Ltd.</span>
            </h1>
            <p className='text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Trusted Chit Fund Institution | Established 2007
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {animatedNumbers.members.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Members Served</div>
              <div className="text-sm text-gray-500 mt-1">Since Inception</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {animatedNumbers.users.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Active Users</div>
              <div className="text-sm text-gray-500 mt-1">This Year</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {animatedNumbers.years}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">Established 2007</div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Link href='/schedules' className='bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold'>
              View Current Chits
            </Link>
            <Link href='/about' className='bg-gray-700 hover:bg-gray-800 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold'>
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Why Choose Brindavan Chits?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Trusted Since 2007</h3>
              <p className="text-gray-600">17+ years of experience in chit fund management with complete transparency.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Multiple Schemes</h3>
              <p className="text-gray-600">Wide range of chit schemes from ₹1,00,000 to ₹30,00,000 to suit your needs.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Multiple Branches</h3>
              <p className="text-gray-600">Three convenient branch locations across Telangana for easy access and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Experience Section */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="inline-block bg-white bg-opacity-20 rounded-full p-3 mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Trusted Since 2007</h3>
              <p className="text-green-100 text-xl mb-6">Over 17 years of experience in chit fund management with complete transparency and reliability</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/schedules' className='bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'>
                  View Schedules
                </Link>
                <Link href='/contact' className='bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors border-2 border-white'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Auction Display */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="inline-block bg-white bg-opacity-20 rounded-full p-3 mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Auction Live Online</h3>
              <p className="text-blue-100 text-xl mb-6">Experience the convenience of digital auctions - conduct your chit auctions online from anywhere</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/contact' className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'>
                  Learn More
                </Link>
                <Link href='/schedules' className='bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors border-2 border-white'>
                  View Schedules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/LOGO.png"
              alt="Brindavan Chits Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="font-semibold">Brindavan Chits Karimnagar (India) Pvt. Ltd.</span>
          </div>
          <div className="mb-4">
            <Link href="/quotation" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Get Project Quote
            </Link>
          </div>
          <p className="text-gray-400 text-sm mb-4">© 2025 Brindavan Chits. All rights reserved. | CIN: U65992TG2007PTC056020</p>
          
          {/* AI Developer India Branding */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Built by</span>
              <a href="https://aideveloperindia.store/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Image
                  src="/A logo transparent.png"
                  alt="AI Developer India Logo"
                  width={20}
                  height={20}
                  className="ml-2"
                />
                <span className="font-medium">AI Developer India</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
