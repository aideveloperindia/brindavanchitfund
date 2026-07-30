import GalleryClient from '@/components/GalleryClient'
import { getGalleryPhotos, getGalleryVideos } from '@/lib/galleryData'

export const dynamic = 'force-dynamic'

export default function GalleryPage() {
  const photos = getGalleryPhotos()
  const videos = getGalleryVideos()

  return <GalleryClient photos={photos} videos={videos} />
}
