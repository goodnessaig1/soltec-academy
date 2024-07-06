/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { FaPause } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa';

const CourseOverviewVideo = ({ courseDetail }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  let hideTimeout;

  useEffect(() => {
    const video = videoRef.current;
    const playHandler = () => {
      setIsPlaying(true);
      setShowPlayButton(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setShowPlayButton(false), 4000);
    };

    const pauseHandler = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
      clearTimeout(hideTimeout);
    };

    video.addEventListener('play', playHandler);
    video.addEventListener('pause', pauseHandler);

    return () => {
      video.removeEventListener('play', playHandler);
      video.removeEventListener('pause', pauseHandler);
      clearTimeout(hideTimeout);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <div className='flex w-full mt-[-118px] items-center  justify-center'>
        <div className='video-player sm:max-w-[343px] smm:min-w-[343px] lg:min-w-[500px] lg:max-w-[600px]  '>
          <video
            className='rounded-3xl smm:min-w-[343px] lg:min-w-[500px]'
            ref={videoRef}
            controls
          >
            <source
              src={courseDetail?.video}
              className='smm:min-w-[343px] lg:min-w-[500px]'
              type='video/mp4'
            />
          </video>
          {showPlayButton && (
            <button
              className='flex items-center justify-center play-button'
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause size={40} /> : <FaPlay size={40} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewVideo;
