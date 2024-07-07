import React from 'react'
import { useVideoCarouselContext } from '../../context'
import VideoCarouselItem from '../../types/video-carousel-item.type'

type VideoItemProps = {
  item: VideoCarouselItem
  index: number
}

const VideoItem = ({ item, index }: VideoItemProps) => {
  const updateVideoRef = useVideoCarouselContext(context => context.updateVideoRef)
  const handleProcess = useVideoCarouselContext(context => context.handleProcess)
  const setVideoData = useVideoCarouselContext(context => context.setVideoData)

  return (
    <div id='slider' className='sm:pr-20 pr-10'>
      <div className='video-carousel_container'>
        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
          <video
            id='video'
            playsInline={true}
            className={`${item.id === 2 && 'translate-x-44'} pointer-events-none`}
            preload='auto'
            muted
            ref={el => updateVideoRef(index, el)}
            onEnded={() => (index !== 3 ? handleProcess('video-end', index) : handleProcess('video-last'))}
            onPlay={() => setVideoData(pre => ({ ...pre, isPlaying: true }))}
          >
            <source src={item.video} type='video/mp4' />
          </video>
        </div>

        <div className='absolute top-12 left-[5%] z-10'>
          {item.textLists.map((text, i) => (
            <p key={i} className='md:text-2xl text-xl font-medium'>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoItem
