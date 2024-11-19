import React, { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import BookItme from "@/components/book-itme";
import fetchBooks from "@/lib/fetch-books";
import { InferGetStaticPropsType } from "next";
import fetchRandomBook from "@/lib/fetch-random-books";
import Head from "next/head";

// export const getServerSideProps = async () => {
//   // Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서,
//   // 컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수
//   // const allBooks = await fetchBooks();
//   // const recoBooks = await fetchRandomBook();

//   const [allBooks, recoBooks] = await Promise.all([
//     fetchBooks(),
//     fetchRandomBook(),
//   ]);

//   return {
//     props: { allBooks, recoBooks },
//   };
// };

export const getStaticProps = async () => {
  // 함수명을 바꾸면 SSG방식으로 변경됨
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBook(),
  ]);

  return {
    props: { allBooks, recoBooks },
    // revalidate: 3,
  };
};

const Index = ({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      <main className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItme key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItme key={book.id} {...book} />
          ))}
        </section>
      </main>
    </>
  );
};

Index.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Index;
