import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  //   {
  //     name: "Tim Cook",
  //     src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg",
  //     profile: "https://links.papareact.com/l4v",
  //   },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile:
      "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard key={index} {...story} />
        //   name={story.name}
        //   src={story.src}
        //   profile={story.profile}
      ))}
    </div>
  );
}

export default Stories;
