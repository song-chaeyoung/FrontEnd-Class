"use client";
import { deleteReviewAction } from "@/actions/delete-review-action";
import React, { useRef, useActionState, useEffect } from "react";

const ReviewItemDeleteButton = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.status);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input type="text" name="reviewId" value={reviewId} readOnly hidden />
      <input type="text" name="bookId" value={bookId} readOnly hidden />
      {isPending ? (
        <div>...</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
      )}
    </form>
  );
};

export default ReviewItemDeleteButton;
