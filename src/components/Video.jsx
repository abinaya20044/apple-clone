import React from 'react'
import video from '../images/video.mp4'
import watchtwo from '../images/watchtwo.jpg'
import img1 from '../images/img1.jpg'

const Video = () => {
  return (
    <div className=''>
      <video src={video} autoPlay muted loop className='w-full border h60vh'></video>
      
      
    </div>
  )
}

export default Video;