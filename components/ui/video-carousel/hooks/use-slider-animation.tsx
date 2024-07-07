import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from '@gsap/react'
import VideoData from '../types/video-data.type'

function useSliderAnimation(videoData: VideoData, setVideoData: React.Dispatch<React.SetStateAction<VideoData>>) {
  const { isEnd, videoId } = videoData
  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut' // show visualizer https://gsap.com/docs/v3/Eases
    })

    // video animation to play the video when it is in the view
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
  }, [isEnd, videoId])
}

export default useSliderAnimation
