"use client";
import React, { useEffect, useState, Suspense } from "react";
// import { useRouter } from "next/nevigation";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const router = useRouter();
  const searchParms = useSearchParams();
  const q = searchParms.get("q");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search || q === search) return;

    router.push(`/search?q=${search}`);
  };

  return (
    <Suspense>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmit}>
          <input type="text" value={search} onChange={onChangeSearch} />
          <input type="submit" value="검색" />
        </form>
      </div>
    </Suspense>
  );
};

export default Searchbar;
