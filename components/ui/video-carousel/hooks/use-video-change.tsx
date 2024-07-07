import { useEffect } from 'react'
import VideoData from '../types/video-data.type'

function useVideoChange(videoData: VideoData, videoRef: React.MutableRefObject<HTMLVideoElement[]>) {
  const { startPlay, videoIdx, isPlaying } = videoData
  useEffect(() => {
    if (!isPlaying) {
      videoRef.current[videoIdx].pause()
    } else {
      startPlay && videoRef.current[videoIdx]?.play()
    }
  }, [startPlay, videoIdx, isPlaying])
}

export default useVideoChange
