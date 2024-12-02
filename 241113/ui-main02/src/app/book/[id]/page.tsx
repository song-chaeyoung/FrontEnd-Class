import React from "react";
import style from "./page.module.css";
import { BookData, ReviewData } from "@/types";
import { notFound } from "next/navigation";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book: BookData = await response.json();
  const {
    // id: bookId,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

const ReviewList = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
};

// 엄격하게 명시한 id값만 받기위해서는?
// export const dynamicParams = false;
// Static Parameter를 생성하는 함수!
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const book: BookData = await response.json();

  return {
    title: `${book.title} - 한입북스`,
    description: `${book.description}`,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: `${book.description}`,
      images: [`${book.coverImgUrl}`],
    },
  };
};

const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className={style.container}>
      <Booktail bookId={id} />
      <ReviewEditor bookId={id} />
      <ReviewList bookId={id} />
    </div>
  );
};

export default BookPage;
