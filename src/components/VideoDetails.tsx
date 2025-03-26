import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../types/videos";
import styles from "../styles/VideoDetails.module.css";
import AuthorSubscribe from "./Subscribe";
import CommentSection from "./CommentSection";
import SuggestedVideo from "./SuggestedVideos";

const VideoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((video) => video.id === parseInt(id ?? "0", 10));

  if (!video) {
    return <div className={styles.error}>Video not found!</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainSection}>
        {/* Video Player */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoIframe}
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.subscribeSection}>
            <AuthorSubscribe
              title={video.title}
              channel={video.channel}
              likes={video.likes}
              dislikes={video.dislikes}
              avatarUrl="https://via.placeholder.com/50"
              subscribers={video.subscribers}
              views={video.views}
              description={video.description}
            />
          </div>
        </div>

        {/* Comments Section */}
        <div className={styles.commentsContainer}>
          <CommentSection />
        </div>
      </div>

      {/* Suggested Videos Section */}
      <div className={styles.suggestedVideosSection}>
        <SuggestedVideo videos={videos} currentVideoId={video.id} />
      </div>
    </div>
  );
};

export default VideoDetails;
