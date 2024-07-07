import React from 'react'
import { useVideoCarouselContext } from '../../context'
import { pauseImg, playImg, replayImg } from '@/utils'
import Image from 'next/image'

const Controller = () => {
  const videoRef = useVideoCarouselContext(context => context.videoRef)
  const updateControllerVideoProgress = useVideoCarouselContext(context => context.updateControllerVideoProgress)
  const updateControllerVideoWrapper = useVideoCarouselContext(context => context.updateControllerVideoWrapper)
  const handleProcess = useVideoCarouselContext(context => context.handleProcess)
  const isLastVideo = useVideoCarouselContext(context => context.videoData.isLastVideo)
  const isPlaying = useVideoCarouselContext(context => context.videoData.isPlaying)

  return (
    <div className='relative flex-center mt-10'>
      <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
        {videoRef.current.map((_, i) => (
          <div
            key={i}
            className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
            ref={el => updateControllerVideoWrapper(i, el)}
          >
            <span className='absolute h-full w-full rounded-full' ref={el => updateControllerVideoProgress(i, el)} />
          </div>
        ))}
      </div>

      <button className='control-btn'>
        <img
          src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
          alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
          onClick={
            isLastVideo
              ? () => handleProcess('video-reset')
              : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
          }
        />
      </button>
    </div>
  )
}

export default Controller
