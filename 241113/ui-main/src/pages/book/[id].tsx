import React from "react";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOnBook from "@/lib/fetch-on-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const bookId = context.params!.id;
  // const books = await fetchBooks();

  if (!bookId) {
    return {
      notFound: true,
    };
  }

  const book = await fetchOnBook(Number(bookId));

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
};

const Book = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입북스의 등록된 도서들을 만나보세요."
          />
        </Head>
        <div>로딩 중 입니다.</div>;
      </>
    );
  }
  if (!book) return "문제가 발생했습니다. 다시시도해주세요";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url("${coverImgUrl}")` }}
        >
          <img src={coverImgUrl} alt="bookImg" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
};

export default Book;
