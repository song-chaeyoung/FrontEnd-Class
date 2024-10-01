import {
  Unsubscribe,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebas";
import Post from "./Post";

// 출력전 타입 정리
export interface IPost {
  id: string;
  createdAt: number;
  photo?: string;
  video?: string;
  post: string;
  userId: string;
  username: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  padding: 0 10px;
`;

const TimeLine = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "contents"),
        orderBy("createdAt", "desc"),
        limit(25)
      );

      // const snapshot = await getDocs(postsQuery);
      // getDocs => 실시간X
      // const posts = snapshot.docs.map((doc) => {
      //   const { createdAt, photo, video, post, userId, username } = doc.data();
      //   return {
      //     id: doc.id,
      //     createdAt,
      //     photo,
      //     video,
      //     post,
      //     userId,
      //     username,
      //   };
      // });

      // onSnapshot 리얼타임으로 감지해서 1개만 업로드해도 기존 데이터까지 포함한 컨텐츠가 업데이트가 됐다고 판단 => (기존 5개 + 신규 1개)6개 업데이트
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { createdAt, photo, video, post, userId, username } =
            doc.data();
          return {
            id: doc.id,
            createdAt,
            photo,
            video,
            post,
            userId,
            username,
          };
        });

        setPosts(posts);
      });
    };

    fetchPosts();

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
