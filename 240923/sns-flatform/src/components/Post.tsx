import React, { useState } from "react";
import { IPost } from "./TimeLine";
import styled from "styled-components";
import { auth, db, storage } from "../firebas";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  ref,
  getDownloadURL,
  StorageError,
  StorageErrorCode,
  uploadBytes,
  uploadBytesResumable,
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

const EditorColumns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
  background: #7f8689;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const EditPostFormTextArea = styled.textarea`
  background: #000;
  color: #fff;
  width: 94%;
  height: 50%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
  transition: all 0.3s;
  &::placeholder {
    opacity: 1;
    transition: all 0.3s;
  }
  &:focus {
    outline: none;
    border: 1px solid #1d9bf0;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const CancelButton = styled.button`
  background: #7f8689;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  background: #1d9bf0;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const SetContentButton = styled.label`
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1d9bf0;
  }
  svg {
    width: 24px;
  }
`;

const SetContentInputButton = styled.input`
  display: none;
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

  const onClickSetContent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) setEditedPhoto(files[0]);
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

  const onUpdate = async () => {
    try {
      if (user?.uid !== userId) return;

      const postDoc = await getDoc(doc(db, "contents", id));
      if (!postDoc.exists()) throw new Error("Documents does not exits");
      const postData = postDoc.data();

      if (postData) {
        if (postData.photo) postData.fileType = "image";
        else if (postData.video) postData.fileType = "video";
      }

      const exsitingFileType = postData.fileType || null;

      if (editedPhoto) {
        const newFileType = editedPhoto.type.startsWith("image/")
          ? "image"
          : "video";
        if (exsitingFileType && exsitingFileType !== newFileType) {
          alert("You can only upload the same type of contents");
          return;
        }

        const locationRef = ref(storage, `contents/${user.uid}/${id}`);
        const uploadTask = uploadBytesResumable(locationRef, editedPhoto);
        if (editedPhoto.size >= 7 * 1024 * 1024) {
          uploadTask.cancel();
          throw new StorageError(
            StorageErrorCode.CANCELED,
            "File size is over 5MB"
          );
        }
        const result = await uploadBytes(locationRef, editedPhoto);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc(db, `contents`, id), {
          post: editedPost,
          photo: newFileType === "image" ? url : "",
          video: newFileType === "video" ? url : "",
        });
      } else {
        await updateDoc(doc(db, `contents`, id), {
          post: editedPost,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        {isEditing ? (
          <EditPostFormTextArea
            onChange={onChange}
            value={editedPost}
            placeholder={post}
          ></EditPostFormTextArea>
        ) : (
          <Payload>{post}</Payload>
        )}
        <EditorColumns>
          {user?.uid === userId ? (
            <>
              {isEditing ? (
                <>
                  <CancelButton onClick={handleCancle}>Cancel</CancelButton>
                  <UpdateButton onClick={onUpdate}>Update</UpdateButton>
                  <SetContentButton htmlFor="edit_content">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      />
                    </svg>
                    <SetContentInputButton
                      id="edit_content"
                      type="file"
                      accept="video/*, image/*"
                      onChange={onClickSetContent}
                    />
                  </SetContentButton>
                </>
              ) : (
                <EditButton onClick={handleEdit}>Edit</EditButton>
              )}
              <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            </>
          ) : null}
        </EditorColumns>
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
