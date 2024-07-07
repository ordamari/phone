import { MutableRefObject, useEffect } from 'react'
import gsap from 'gsap'
import VideoData from '../types/video-data.type'
import VideoCarouselItem from '../types/video-carousel-item.type'

function useControllerAnimation(
  controllerVideoProgress: MutableRefObject<HTMLSpanElement[]>,
  controllerVideoWrapper: MutableRefObject<HTMLDivElement[]>,
  videoRef: MutableRefObject<HTMLVideoElement[]>,
  sliders: VideoCarouselItem[],
  videoData: VideoData
) {
  const { videoId, isPlaying, startPlay } = videoData

  useEffect(() => {
    let currentProgress = 0
    let span = controllerVideoProgress.current
    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100)
          if (progress != currentProgress) {
            currentProgress = progress

            // set the width of the progress bar
            gsap.to(controllerVideoWrapper.current[videoId], {
              width:
                window.innerWidth < 760
                  ? '10vw' // mobile
                  : window.innerWidth < 1200
                    ? '10vw' // tablet
                    : '4vw' // laptop
            })

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white'
            })
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(controllerVideoWrapper.current[videoId], {
              width: '12px'
            })
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf'
            })
          }
        }
      })

      if (videoId == 0) {
        anim.restart()
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(videoRef.current[videoId].currentTime / sliders[videoId].videoDuration)
      }

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate)
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay])
}

export default useControllerAnimation
