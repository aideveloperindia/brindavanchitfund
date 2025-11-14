'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos')

  const samplePhotos = [
    { id: 1, placeholder: 'Office Reception Area', category: 'office' },
    { id: 2, placeholder: 'Main Office Building', category: 'office' },
    { id: 3, placeholder: 'Team Meeting Room', category: 'events' },
    { id: 4, placeholder: 'Award Ceremony 2024', category: 'events' },
    { id: 5, placeholder: 'Customer Service Desk', category: 'office' },
    { id: 6, placeholder: 'Annual Function 2023', category: 'events' },
    { id: 7, placeholder: 'Branch Office - Jagtial', category: 'office' },
    { id: 8, placeholder: 'Branch Office - Ramagundam', category: 'office' },
    { id: 9, placeholder: 'Team Building Activity', category: 'events' },
  ]

  const sampleVideos = [
    { id: 1, title: 'Company Introduction', description: 'Learn about our services and commitment' },
    { id: 2, title: 'How Chit Funds Work', description: 'Educational video explaining chit fund process' },
    { id: 3, title: 'Success Stories', description: 'Real stories from our satisfied members' },
    { id: 4, title: 'Online Auction', description: 'Overview of our online auction feature' },
  ]

  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 p-6 bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>Gallery</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Explore our office, events, and success stories through photos and videos
          </p>
        </div>
      </section>

      {/* Gallery Overview */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Gallery Overview</h2>
            <p className="text-blue-100 text-lg">
              Explore our office spaces, events, and team activities through our photo and video gallery
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8 pt-6">
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'photos'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📸 Photos ({samplePhotos.length})
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'videos'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  🎥 Videos ({sampleVideos.length})
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'photos' && (
                <div>
                  <h2 className="text-2xl font-semibold text-green-700 mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {samplePhotos.map((photo) => (
                      <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-white text-2xl">📷</span>
                            </div>
                            <p className="text-green-700 font-medium text-sm">Photo Placeholder</p>
                          </div>
                          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                            {photo.category}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800">{photo.placeholder}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'videos' && (
                <div>
                  <h2 className="text-2xl font-semibold text-green-700 mb-6">Video Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sampleVideos.map((video) => (
                      <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 bg-gray-900 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">▶</span>
                            </div>
                            <p className="text-sm opacity-75">Video Preview</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                          <p className="text-gray-600 text-sm">{video.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Gallery Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Office & Infrastructure</h3>
              <p className="text-gray-600">
                Photos and videos of our office premises, work environment, and facilities across all branches.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Events & Celebrations</h3>
              <p className="text-gray-600">
                Annual functions, award ceremonies, team building activities, and special occasions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Team & Members</h3>
              <p className="text-gray-600">
                Team photos, member testimonials, success stories, and customer interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Want to Share Your Experience?</h2>
            <p className="text-green-100 mb-6">
              Share your success stories, testimonials, or photos with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@brindavanchits.in" className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Share Your Story
              </a>
              <a href="/contact" className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors border-2 border-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/LOGO.png" alt="Brindavan Chits Logo" className="w-10 h-10 mr-3" />
            <span className="font-semibold">Brindavan Chits Karimnagar (India) Pvt. Ltd.</span>
          </div>
          <div className="mb-4">
            <a href="/quotation" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Get Project Quote
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-4">© 2025 Brindavan Chits. All rights reserved. | CIN: U65992TG2007PTC056020</p>
          
          {/* AI Developer India Branding */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Built by</span>
              <a href="https://aideveloperindia.store/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <img
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
