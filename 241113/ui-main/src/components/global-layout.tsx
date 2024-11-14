import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layouy.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📙 Book Lists</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>Copyright @2024CY</footer>
    </div>
  );
};

export default GlobalLayout;
