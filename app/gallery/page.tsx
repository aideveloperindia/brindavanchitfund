'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GalleryPage() {
  const { language } = useLanguage()
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

      {/* Premium Hero Section */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>
            {language === 'te' ? 'కార్యాలయం, ఈవెంట్‌లు, సిబ్బంది ఫోటోలు' : 'Photos of Office, Events, Staff'}
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
            {language === 'te' 
              ? 'కార్యాలయం, ఈవెంట్‌లు, సిబ్బంది ఫోటోలు'
              : 'Photos of office, events, staff'
            }
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
                      ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📸 Photos ({samplePhotos.length})
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'videos'
                      ? 'border-cyan-500 text-cyan-600'
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
                  <h2 className="text-2xl font-semibold text-sky-700 mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {samplePhotos.map((photo) => (
                      <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-white text-2xl">📷</span>
                            </div>
                            <p className="text-sky-700 font-medium text-sm">Photo Placeholder</p>
                          </div>
                          <div className="absolute top-2 right-2 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs">
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
                  <h2 className="text-2xl font-semibold text-sky-700 mb-6">Video Gallery</h2>
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
          <h2 className='text-3xl font-semibold text-sky-700 mb-8 text-center'>Gallery Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-sky-100 to-slate-50 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-sky-800 mb-3">Office & Infrastructure</h3>
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
          <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Want to Share Your Experience?</h2>
            <p className="text-sky-100 mb-6">
              Share your success stories, testimonials, or photos with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@brindavanchits.in" className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Share Your Story
              </a>
              <a href="/contact" className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-colors border-2 border-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}