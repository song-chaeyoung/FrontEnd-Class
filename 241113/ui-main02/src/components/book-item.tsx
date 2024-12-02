import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";
import Image from "next/image";

const BookItem = ({ id, title, subTitle, author, coverImgUrl }: BookData) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <Image
        src={coverImgUrl}
        width={80}
        height={80}
        alt={`도서 ${title}의 표지 이미지`}
      />
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
