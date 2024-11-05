import React from 'react';
import video from '../video/video.mp4'

const Video = () => {
  return (
    <div className="video-container h-full w-full">
      <video
        className="fullscreen-video w-full h-full opacity-2" 
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
