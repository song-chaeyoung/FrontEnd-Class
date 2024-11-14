import type { BookData } from "@/types";
import React from "react";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItme = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} />
      <div className={style.info}>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItme;
