import React, { useState, ReactNode } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;
    router.push(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmitEvent}>
          <input
            value={search}
            type="text"
            name=""
            id=""
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
          />
          <input type="submit" value="검색" />
        </form>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
