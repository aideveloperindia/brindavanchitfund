import fs from 'fs'
import path from 'path'

export type GalleryMediaType = 'image' | 'video'

export interface GalleryItem {
  id: string
  src: string
  title: string
  type: GalleryMediaType
  category: 'photos' | 'videos'
}

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'])
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.ogg', '.m4v'])

function humanizeFilename(filename: string): string {
  const base = filename.replace(path.extname(filename), '')
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()) || filename
}

function readMediaDir(
  absDir: string,
  publicPrefix: string,
  category: 'photos' | 'videos',
  type: GalleryMediaType,
  allowedExt: Set<string>
): GalleryItem[] {
  if (!fs.existsSync(absDir)) return []

  return fs
    .readdirSync(absDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .filter((entry) => allowedExt.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
    .map((entry) => ({
      id: `${category}-${entry.name}`,
      src: `${publicPrefix}/${encodeURIComponent(entry.name)}`,
      title: humanizeFilename(entry.name),
      type,
      category,
    }))
}

/** Scans public/gallery for images and videos the user drops into the workspace. */
export function getGalleryMedia(): GalleryItem[] {
  const galleryRoot = path.join(process.cwd(), 'public', 'gallery')

  const photos = readMediaDir(
    path.join(galleryRoot, 'photos'),
    '/gallery/photos',
    'photos',
    'image',
    IMAGE_EXT
  )
  const videos = readMediaDir(
    path.join(galleryRoot, 'videos'),
    '/gallery/videos',
    'videos',
    'video',
    VIDEO_EXT
  )

  // Also accept files dropped directly into public/gallery/
  const rootImages = readMediaDir(galleryRoot, '/gallery', 'photos', 'image', IMAGE_EXT)
  const rootVideos = readMediaDir(galleryRoot, '/gallery', 'videos', 'video', VIDEO_EXT)

  return [...photos, ...rootImages, ...videos, ...rootVideos]
}

export function getGalleryPhotos(): GalleryItem[] {
  return getGalleryMedia().filter((item) => item.type === 'image')
}

export function getGalleryVideos(): GalleryItem[] {
  return getGalleryMedia().filter((item) => item.type === 'video')
}

export function getLatestGalleryItems(count: number = 4): GalleryItem[] {
  return getGalleryMedia().slice(0, count)
}
