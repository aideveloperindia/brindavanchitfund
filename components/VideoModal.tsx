'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { language } = useLanguage()

  useEffect(() => {
    // Auto-play video when modal opens
    if (videoRef.current && isOpen) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play prevented:', err)
      })
    }
  }, [isOpen])

  useEffect(() => {
    // Hide scrollbar immediately to prevent layout shift
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    // Prevent scrolling and movement when modal is open
    if (isOpen) {
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      document.documentElement.classList.remove('modal-closed')
    } else {
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
      // Restore scrollbar only after modal closes
      setTimeout(() => {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        document.documentElement.classList.add('modal-closed')
      }, 100)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      document.documentElement.classList.remove('modal-closed')
    }
  }, [isOpen])

  const handleVideoEnd = () => {
    // Close modal after video ends with transition
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`} style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Blurred Background Overlay */}
      <div 
        className={`absolute inset-0 backdrop-blur-lg transition-all duration-500 ${isClosing ? 'backdrop-blur-none opacity-0' : 'backdrop-blur-lg opacity-100'}`}
        onClick={handleClose}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></div>

      {/* Video Container */}
      <div className={`relative z-10 flex items-center justify-center transition-all duration-500 ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Round Video Container */}
        <div className="relative w-[70vw] max-w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/30 ring-8 ring-white/10 transform transition-all duration-500">
          <video
            ref={videoRef}
            src="/OPENING VIDEO MODAL.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:scale-110 shadow-lg"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

