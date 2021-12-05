import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex item-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-blue-500 active:border-b-2 group">
      <Icon
        className={`h-5 text-center sm:h-7 mx-auto my-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
