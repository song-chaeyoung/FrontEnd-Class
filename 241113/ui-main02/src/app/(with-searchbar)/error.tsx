"use client";

import { startTransition, useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다...</h3>
      <button
        onClick={() => {
          startTransition(() => {
            // Promise.all 과 같은 역할
            router.refresh(); // 현재 페이지에 대한 필요한 서버정보만 (컴포넌트 페이지의 정보만) 다시 불러와주는 역할
            reset(); // 클라이언트 컴포넌트에서 발생한 문제를 해결하기 위해서 retry하는 역할
          });
        }}
      >
        에러 해결
      </button>
    </div>
  );
};

export default Error;
