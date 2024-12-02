import React from "react";
import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.btm_container}>
        <div className={style.date}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        {/* <div className={style.delete_btn}>삭제하기</div> */}
        <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
      </div>
    </div>
  );
};

export default ReviewItem;
