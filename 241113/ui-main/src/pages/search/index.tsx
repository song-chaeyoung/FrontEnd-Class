import { useRouter } from "next/router";
import React from "react";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  console.log(q);

  return <h1>search : {q}</h1>;
};

export default Search;
