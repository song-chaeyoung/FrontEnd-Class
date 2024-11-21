import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import React, { ReactNode } from "react";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.continaer}>
          <header>
            <Link href={"/"}>👻ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @SCY</footer>
        </div>
      </body>
    </html>
  );
};

export default Rootlayout;
