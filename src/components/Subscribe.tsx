import React, { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import styles from "../styles/Subscribe.module.css";
import { SubscribeProps } from "../types/SubscribeTypes";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Subscribe: React.FC<SubscribeProps> = ({
  title,
  channel,
  avatarUrl,
  subscribers,
  likes,
  dislikes,
  views,
  description,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.videoTitle}>{title}</h3>

      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <img
            src={avatarUrl}
            alt={`${channel}'s avatar`}
            className={styles.avatar}
          />
          <div className={styles.channelInfo}>
            <p className={styles.channelName}>{channel}</p>
            <div className={styles.subscribeContainer}>
              <span className={styles.subscriberCount}>{subscribers}</span>
              <button
                onClick={handleSubscribe}
                className={`${styles.subscribeButton} ${
                  isSubscribed ? styles.subscribed : ""
                }`}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Action Buttons */}
        <div className={styles.rightSection}>
          <button className={styles.actionButton}>
            <ThumbUpOutlinedIcon /> {likes}
          </button>
          <button className={styles.actionButton}>
            <ThumbDownOutlinedIcon /> {dislikes}
          </button>
          <button className={styles.actionButton}>
            <ReplyOutlinedIcon /> Share
          </button>
          <button className={styles.actionButton}>
            <DownloadOutlinedIcon /> Download
          </button>
        </div>
      </div>

      {/* Line 3 and 4: Views and Description */}
      <div className={styles.containerDescription}>
        <p className={styles.views}>{views}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Subscribe;
