import { useRef, useState } from 'react'
import { VideoCarouselContext } from './context'
import VideoList from './components/video-list'
import updateRefList from './utils/update-ref-list'
import Controller from './components/controller'
import useControllerAnimation from './hooks/use-controller-animation'
import useSliderAnimation from './hooks/use-slider-animation'
import useVideoChange from './hooks/use-video-change'
import ProcessType from './types/process-type.type'
import VideoCarouselItem from './types/video-carousel-item.type'

type VideoCarouselType = {
  sliders: VideoCarouselItem[]
}

const VideoCarousel = ({ sliders }: VideoCarouselType) => {
  const videoRef = useRef<HTMLVideoElement[]>([])
  const controllerVideoProgress = useRef<HTMLSpanElement[]>([])
  const controllerVideoWrapper = useRef<HTMLDivElement[]>([])

  const [videoData, setVideoData] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })

  useSliderAnimation(videoData, setVideoData)
  useControllerAnimation(controllerVideoProgress, controllerVideoWrapper, videoRef, sliders, videoData)
  useVideoChange(videoData, videoRef)

  const handleProcess = (type: ProcessType, idx: number = 0) => {
    switch (type) {
      case 'video-end':
        setVideoData(pre => ({ ...pre, isEnd: true, videoId: idx + 1 }))
        break

      case 'video-last':
        setVideoData(pre => ({ ...pre, isLastVideo: true }))
        break

      case 'video-reset':
        setVideoData(pre => ({ ...pre, videoId: 0, isLastVideo: false }))
        break

      case 'pause':
        setVideoData(pre => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      case 'play':
        setVideoData(pre => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      default:
        return videoData
    }
  }

  return (
    <VideoCarouselContext.Provider
      value={{
        sliders,
        videoRef,
        videoData,
        handleProcess,
        setVideoData,
        updateControllerVideoProgress: updateRefList(controllerVideoProgress),
        updateControllerVideoWrapper: updateRefList(controllerVideoWrapper),
        updateVideoRef: updateRefList(videoRef)
      }}
    >
      <VideoList />
      <Controller />
    </VideoCarouselContext.Provider>
  )
}

export default VideoCarousel
