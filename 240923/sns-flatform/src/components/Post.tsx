import React, { useState } from "react";
import { IPost } from "./TimeLine";
import styled from "styled-components";
import { auth, db, storage } from "../firebas";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  ref,
  getDownloadURL,
  StorageError,
  StorageErrorCode,
} from "firebase/storage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  padding: 20px;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 15px;
`;

const Video = styled.video`
  width: 200px;
  height: 100%;
  border-radius: 15px;
`;

const Username = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const Payload = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const DeleteButton = styled.button`
  background: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const Post = ({ id, photo, video, post, userId, username }: IPost) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const [editedPhoto, setEditedPhoto] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedPost(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancle = async () => {
    setIsEditing(false);
  };

  const user = auth.currentUser;
  const onDelete = async () => {
    // 1. friestore DB 찾기 (비동기)
    // 2. id가 동일하면 삭제
    // if (user?.uid !== userId) return;
    const ok = confirm("Are you sure you want to delete this post?");
    if (!ok || user?.uid !== userId) return;

    try {
      await deleteDoc(doc(db, `contents`, id));
      if (photo) {
        const photoRef = ref(storage, `contents/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{post}</Payload>
        {user?.uid === userId ? (
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        ) : null}
      </Column>
      {photo ? (
        <Column>
          <Photo src={photo} alt={userId} />
        </Column>
      ) : null}
      {video ? (
        <Column>
          <Video src={video} />
        </Column>
      ) : null}
    </Wrapper>
  );
};

export default Post;
