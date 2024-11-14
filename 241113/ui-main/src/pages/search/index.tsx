import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItme from "@/components/book-itme";

const Page = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  return (
    <div>
      {books.map((book) => (
        <BookItme key={book.id} {...book} />
      ))}
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
