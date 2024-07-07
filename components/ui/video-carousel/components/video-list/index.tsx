import { useVideoCarouselContext } from '../../context'
import VideoItem from '../video-item'

function VideoList() {
  const sliders = useVideoCarouselContext(context => context.sliders)

  return (
    <div className=''>
      <div className='flex items-center'>
        {sliders.map((item, index) => (
          <VideoItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default VideoList
