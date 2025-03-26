import styles from "../styles/VideoContent.module.css";
import { videos } from "../types/videos";
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoContent: React.FC = () => {
  const navigate = useNavigate();

  const handleVideoClick = (id: number) => {
    navigate(`/video/${id}`);
  };


return (
  <div className={styles.videoContentContainer}>
    {videos.map((video) => (
      <div 
      key={video.id} 
      className={styles.videoCard}
      onClick={() => handleVideoClick(video.id)}
      >
       
        <img
         src={`https://img.youtube.com/vi/${video.src.split("/embed/")[1]}/hqdefault.jpg`} // Generate thumbnail dynamically
         alt={video.title}
         className={styles.videoThumbnail}
       />

        {/* Video details */}
        <div className={styles.videoDetails}>
          <h3 className={styles.videoTitle}>{video.title}</h3>
          <p className={styles.videoChannel}>{video.channel}</p>
          <span className={styles.videoViews}>{video.views}</span>
        </div>
      </div>
    ))}
  </div>
);
};

export default VideoContent;


