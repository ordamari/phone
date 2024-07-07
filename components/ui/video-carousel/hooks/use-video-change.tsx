import { useEffect } from 'react'
import VideoData from '../types/video-data.type'

function useVideoChange(videoData: VideoData, videoRef: React.MutableRefObject<HTMLVideoElement[]>) {
  const { startPlay, videoId, isPlaying } = videoData
  useEffect(() => {
    if (!isPlaying) {
      videoRef.current[videoId].pause()
    } else {
      startPlay && videoRef.current[videoId]?.play()
    }
  }, [startPlay, videoId, isPlaying])
}

export default useVideoChange
