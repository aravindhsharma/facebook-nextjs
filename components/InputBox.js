import React, { useRef, useState } from "react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  // create a function to send the post to firebase and clear the input
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // progress function
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              snapshot.state === "paused"
                ? console.log("Upload is paused")
                : console.log("Upload is running");
            },
            (error) => {
              // error function
              (error) => {
                console.log(error);
              };
            },
            () => {
              // complete function
              storage // get the download url
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
    setImageToPost(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImageToPost(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white pd-2 rounded-2xl">
      <div className="flex space-x-4 p-4 items-center text-gray-500 font-medium mt-6">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="user-img"
        />
        <form className="flex flex-1">
          <input
            className="flex-grow px-5 h-12  bg-gray-100 border-gray-300 rounded-full w-full p-2 focus:outline-none"
            type="text"
            placeholder="What's happening?"
            ref={inputRef}
          />
          <button
            hidden
            type="submit"
            onClick={sendPost}
            clas
            sName="bg-gray-300 rounded-full p-2 ml-2 focus:outline-none"
          >
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain"
              src={imageToPost}
              alt="image"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
