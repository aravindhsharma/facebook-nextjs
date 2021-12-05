import React from "react";
import Image from "next/image";

function Contact() {
  const contacts = [
    { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
    { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
    { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
    { src: "https://links.papareact.com/6gg", name: "The Queen" },
    { src: "https://links.papareact.com/r57", name: "James Bond" },
  ];
  return (
    <div>
      {contacts.map((contact) => (
        <div
          className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
          key={contact.src}
        >
          <Image
            src={contact.src}
            width={50}
            height={50}
            alt={contact.name}
            layout="fixed"
            className="rounded-full"
            objectFit="cover"
          />
          <p>{contact.name}</p>
          <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
