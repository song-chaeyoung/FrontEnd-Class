"use client";
// import { useState, useEffect } from "react";
import styles from "./page.module.css";
// import ClientComponent from "../../components/client-component";
// import ServerComponent from "../../components/server-component";
import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

export default function Home() {
  // console.log("컴포넌트 실행");
  // 클라이언트 1회 + 서버 1회 => 2번 콘솔이 찍힘
  // const [state, setState] = useState("");
  // useEffect(() => {
  //   console.log("test");
  // }, []);
  return (
    <div className={styles.page}>
      Index Page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
