import { useRouter } from "next/router";
import React from "react";

const Book = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);

  return <h1>Book</h1>;
};

export default Book;
