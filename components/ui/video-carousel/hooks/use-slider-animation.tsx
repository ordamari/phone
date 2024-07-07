import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from '@gsap/react'
import VideoData from '../types/video-data.type'

function useSliderAnimation(videoData: VideoData, setVideoData: React.Dispatch<React.SetStateAction<VideoData>>) {
  const { isEnd, videoIdx } = videoData
  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoIdx}%)`,
      duration: 2,
      ease: 'power2.inOut'
    })

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none'
      },
      onComplete: () => {
        setVideoData(pre => ({
          ...pre,
          startPlay: true,
          isPlaying: true
        }))
      }
    })
  }, [isEnd, videoIdx])
}

export default useSliderAnimation
