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
  const isLast = useVideoCarouselContext(context => context.sliders.length - 1 === index)

  return (
    <div id='slider' className='sm:pr-20 pr-10'>
      <div className='video-carousel_container'>
        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
          <video
            id='video'
            playsInline={true}
            className={`${item.className} pointer-events-none`}
            preload='auto'
            muted
            ref={el => updateVideoRef(index, el)}
            onEnded={() => (isLast ? handleProcess('video-last') : handleProcess('video-end', index))}
            onPlay={() => setVideoData(pre => ({ ...pre, isPlaying: true }))}
          >
            <source src={item.video} type='video/mp4' />
          </video>
        </div>

        <VideoTexts textLists={item.textLists} />
      </div>
    </div>
  )
}

function VideoTexts({ textLists }: { textLists: string[] }) {
  return (
    <div className='absolute top-12 left-[5%] z-10'>
      {textLists.map((text, i) => (
        <p key={i} className='md:text-2xl text-xl font-medium'>
          {text}
        </p>
      ))}
    </div>
  )
}

export default VideoItem
