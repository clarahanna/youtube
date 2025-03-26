import React from "react";
import { useNavigate } from "react-router-dom";
import { SuggestedVideoProps } from "../types/suggestedVideosTypes";
import styles from "../styles/SuggestedVideos.module.css";

const SuggestedVideo: React.FC<SuggestedVideoProps> = ({
  videos,
  currentVideoId,
}) => {
  const navigate = useNavigate();

  // Filter out the current video from the list of suggested videos
  const suggestedVideos = videos.filter((video) => video.id !== currentVideoId);

  const handleVideoClick = (videoId: number) => {
    navigate(`/video/${videoId}`); // Redirect to another video's page
  };

  return (
    <div className={styles.suggestedVideosContainer}>
      <h3>Suggested Videos</h3>
      {suggestedVideos.map((video) => (
        <div
          key={video.id}
          className={styles.suggestedVideoCard}
          onClick={() => handleVideoClick(video.id)}
        >
          <img
            src={`https://img.youtube.com/vi/${video.src.split("/embed/")[1]}/hqdefault.jpg`}
            alt={video.title}
            className={styles.thumbnail}
          />
          <div>
            <h4 className={styles.suggestedVideoTitle}>{video.title}</h4>
            <p className={styles.suggestedVideoChannel}>{video.channel}</p>
            <span className={styles.suggestedVideoViews}>{video.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedVideo;
