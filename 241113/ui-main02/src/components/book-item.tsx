import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItem = ({ id, title, subTitle, author, coverImgUrl }: BookData) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt={title} />
      <div>
        <div className={style.title}>{title}</div>
        <br />
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>{author}</div>
      </div>
    </Link>
  );
};

export default BookItem;
