import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContentLoader, { Facebook } from "react-content-loader";

function Post({ name, message, email, postImage, image, timestamp }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" p-5 bg-white mt-5 rounded-t-2xl  shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div>
            <p className="text-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage &&
        (loading ? (
          <Facebook className="bg-white" />
        ) : (
          <div className="relative h-56 md:h-56 bg-white">
            <Image src={postImage} alt="post" objectFit="cover" layout="fill" />
          </div>
        ))}

      {/* Footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <dib className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </dib>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;