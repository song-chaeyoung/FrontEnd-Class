import React, { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebas";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
`;

const Textarea = styled.textarea`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 250px;
  resize: none;
  transition: all 0.5s;
  &::placeholder {
    font-size: 20px;
    opacity: 1;
    transition: all 0.5s;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf9;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const AttachFileButton = styled.label`
  width: 100%;
  color: #1d9bf9;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #1d9bf9;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid transparent;
    background: #1d9bf9;
    color: #fff;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitBtn = styled.input`
  background: #fff;
  color: #1d9bf9;
  border: none;
  border-radius: 20px;
  padding: 10px 0;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.5s;
  &:hover,
  &.active {
    opacity: 0.85;
  }
`;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const maxFileSize = 5 * 1024 * 1024;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const OnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      if (files[0].size > maxFileSize) {
        alert("The Maximum Capacity that can be uploaded is 5MB");
        return;
      }
      setFile(files[0]);
    }
  };

  const onSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoading || post === "" || post.length > 180) return;
    try {
      setIsLoading(true);

      const doc = await addDoc(collection(db, "contents"), {
        post,
        createdAt: Date.now(),
        username: user?.displayName || "Anonymous",
        userId: user.uid,
      });

      if (file) {
        const locationRef = ref(storage, `contents/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        const fileType = file.type;

        if (fileType.startsWith("image/")) {
          await updateDoc(doc, {
            photo: url,
          });
        }
        if (fileType.startsWith("video/")) {
          await updateDoc(doc, {
            video: url,
          });
        }

        // await updateDoc(doc, {
        //   photo: url,
        //   video: url,
        // });
      }

      setPost("");
      setFile(null);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={onSumbit}>
        <Textarea
          onChange={onChange}
          value={post}
          name="contents"
          id="contents"
          placeholder="What is Happening?"
          required
        ></Textarea>
        <AttachFileButton htmlFor="file">
          {file ? "Contents Added ✅" : "Add 😉"}
        </AttachFileButton>
        <AttachFileInput
          onChange={OnFileChange}
          type="file"
          id="file"
          accept="image/*, video/*"
        />
        <SubmitBtn type="submit" value={isLoading ? "Posting..." : "Post"} />
      </Form>
    </div>
  );
};

export default PostForm;
