import React from "react";
import { Comment } from "../types/commentsTypes";
import styles from "../styles/CommentSection.module.css";
import { useState } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      name: "@ayasawy8972",
      text: "ملك الوحيده اللي عرفت تضحك مروان والاستوديو كله كده  بجد 😂😂😂😂😂😂",
      likes: "2.6K",
      dislikes: "0",
      date: "2 weeks ago",
    },
    {
      name: "@abdelmonemelshazly",
      text: "عايزين الاسطي عبده ومحمد عبد المعطي هتبقي الحلقه موووت ❤😂",
      likes: "3.1K",
      dislikes: "0",
      date: "2 weeks ago",
    },
    {
      name: "@amiramagdy5827",
      text: "ملك من ضحك عينيها مدمعه طول الحلقه وبجد يا شباب ده معناه انها تلقائيه اوي والضحك والهخ ده بجد ومن قلبها مش مصتنعه بجنيه والله 😂♥️♥️",
      likes: "1.5K",
      dislikes: "0",
      date: "2 weeks ago",
    },
    {
      name: "@gemmymagever4413",
      text: "ملك في حتة تانية سبحان الله علي قبولها بنوتة جميلة جدا",
      likes: "712",
      dislikes: "0",
      date: "2 weeks ago",
    },
    {
      name: "@Ahmedrayan-ml",
      text: "ملك دهشان اكتر حد عفوي ف الكون وتدخل القلب من اكبر الابواب",
      likes: "517",
      dislikes: "0",
      date: "2 weeks ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentData: Comment = {
        name: "You", 
        text: newComment,
        likes: "0",
        dislikes: "0",
        date: "Just now",
      };
      setComments([newCommentData, ...comments]); 
      setNewComment(""); 
    }
  };
 
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{comments.length} Comments</h3>

      {/* Add Comment Section */}
      <div className={styles.addComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className={styles.input}
        />
        <button onClick={handleAddComment} className={styles.button}>
          Comment
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <p className={styles.commentHeader}>
              {comment.name} • <span className={styles.date}>{comment.date}</span>
            </p>
            <p className={styles.text}>{comment.text}</p>
            <p className={styles.reactions}>
              Likes: {comment.likes} • Dislikes: {comment.dislikes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;