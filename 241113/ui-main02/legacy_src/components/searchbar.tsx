"use client";
import React, { useState } from "react";
// import { useRouter } from "next/nevigation";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={search} onChange={onChangeSearch} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default Searchbar;
