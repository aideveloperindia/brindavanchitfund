'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import type { GalleryItem } from '@/lib/galleryData'

interface GalleryClientProps {
  photos: GalleryItem[]
  videos: GalleryItem[]
}

export default function GalleryClient({ photos, videos }: GalleryClientProps) {
  const { language, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>(
    photos.length > 0 || videos.length === 0 ? 'photos' : 'videos'
  )
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] px-6 pb-20 pt-32 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D9A441] blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-5xl font-black md:text-6xl lg:text-7xl">{t.gallery.title}</h1>
          <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">{t.gallery.subtitle}</p>
        </div>
      </section>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'scale-105 bg-[#0F2747] text-white shadow-lg'
                  : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {language === 'te' ? `ఫోటోలు (${photos.length})` : `Photos (${photos.length})`}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'scale-105 bg-[#0F2747] text-white shadow-lg'
                  : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {language === 'te' ? `వీడియోలు (${videos.length})` : `Videos (${videos.length})`}
            </button>
          </div>

          {activeTab === 'photos' && (
            <>
              {photos.length === 0 ? (
                <EmptyState
                  language={language}
                  messageEn="No photos yet. Add image files to public/gallery/photos/"
                  messageTe="ఇంకా ఫోటోలు లేవు. public/gallery/photos/ లో ఇమేజ్ ఫైల్స్ జోడించండి"
                />
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo, index) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setLightbox(photo)}
                      className="premium-card group overflow-hidden text-left hover-lift"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={language === 'te' ? 'గ్యాలరీ ఫోటో' : 'Gallery photo'}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'videos' && (
            <>
              {videos.length === 0 ? (
                <EmptyState
                  language={language}
                  messageEn="No videos yet. Add video files to public/gallery/videos/"
                  messageTe="ఇంకా వీడియోలు లేవు. public/gallery/videos/ లో వీడియో ఫైల్స్ జోడించండి"
                />
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="premium-card overflow-hidden hover-lift"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="aspect-video bg-slate-900">
                        <video
                          src={video.src}
                          controls
                          preload="metadata"
                          className="h-full w-full object-contain"
                          aria-label={language === 'te' ? 'గ్యాలరీ వీడియో' : 'Gallery video'}
                        >
                          {language === 'te'
                            ? 'మీ బ్రౌజర్ వీడియోను సపోర్ట్ చేయదు.'
                            : 'Your browser does not support the video tag.'}
                        </video>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={language === 'te' ? 'గ్యాలరీ ఫోటో' : 'Gallery photo'}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            {language === 'te' ? 'మూసివేయి' : 'Close'}
          </button>
          <div className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={language === 'te' ? 'గ్యాలరీ ఫోటో' : 'Gallery photo'}
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

function EmptyState({
  language,
  messageEn,
  messageTe,
}: {
  language: string
  messageEn: string
  messageTe: string
}) {
  return (
    <div className="premium-card py-20 text-center">
      <p className="mb-2 text-2xl font-bold text-gray-500">
        {language === 'te' ? 'గ్యాలరీ ఖాళీగా ఉంది' : 'Gallery is empty'}
      </p>
      <p className="text-gray-400">{language === 'te' ? messageTe : messageEn}</p>
    </div>
  )
}
