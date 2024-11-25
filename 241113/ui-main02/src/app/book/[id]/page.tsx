import React from "react";
import style from "./page.module.css";
import { BookData } from "@/types";
import { notFound } from "next/navigation";

// 엄격하게 명시한 id값만 받기위해서는?
// export const dynamicParams = false;

// Static Parameter를 생성하는 함수!
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
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
    <div className={style.container}>
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
    </div>
  );
};

export default Page;
