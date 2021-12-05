import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5">
      <div className="flex justify-between items-center text-gray-400 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default widgets;
