import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
// import books from "@/mock/book.json";
import BookItme from "@/components/book-itme";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import Head from "next/head";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: { books },
//   };
// };

const Page = () => {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    fetchSearchResult();
  }, [q]);

  return (
    <>
      <Head>
        <title>{q}의 검색결과 | 한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="검색결과 | 한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItme key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
