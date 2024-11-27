import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list.skeleton";

export const dynamic = "force-dynamic";

// 특정페이지 유형을 강제로 static, dynami 페이지로 설정하도록 하는 옵션들
// 1. auto : 페이지 컴포넌트의 기본값 보장 => 강제하지 않음
// 2. force-dynamic : 페이지를 강제적으로 Dynamic 페이지로 설정
// 3. force-static
// 4. error

const AllBooks = async () => {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const RecoBooks = async () => {
  // try {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random123`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const randomBooks: BookData[] = await response.json();
  return (
    <div>
      {randomBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
  // } catch (err) {
  //   console.log(err);
  // return <div>ERROR!</div>;
  // }
};

const Home = () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>

        <Suspense
          fallback={
            <>
              <BookListSkeleton count={3} />
            </>
          }
        >
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense
          fallback={
            <>
              <BookListSkeleton count={12} />
            </>
          }
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
