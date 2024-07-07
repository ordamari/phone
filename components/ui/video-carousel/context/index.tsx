import { MutableRefObject, createContext, useContext } from 'react'
import VideoData from '../types/video-data.type'
import ProcessType from '../types/process-type.type'
import VideoCarouselItem from '../types/video-carousel-item.type'

type VideoCarouselContextType = {
  sliders: VideoCarouselItem[]
  videoRef: MutableRefObject<HTMLVideoElement[]>
  videoData: VideoData
  handleProcess: (type: ProcessType, index?: number) => void
  setVideoData: React.Dispatch<React.SetStateAction<VideoData>>
  updateControllerVideoProgress: (index: number, el: HTMLSpanElement | null) => void
  updateControllerVideoWrapper: (index: number, el: HTMLDivElement | null) => void
  updateVideoRef: (index: number, el: HTMLVideoElement | null) => void
}

const VideoCarouselContext = createContext<VideoCarouselContextType | undefined>(undefined)

function useVideoCarouselContext<T>(selector: (context: VideoCarouselContextType) => T) {
  const context = useContext(VideoCarouselContext)
  if (!context) {
    throw new Error('useVideoCarouselContext must be used within a VideoCarouselProvider')
  }

  return selector(context)
}

export { VideoCarouselContext, useVideoCarouselContext }
