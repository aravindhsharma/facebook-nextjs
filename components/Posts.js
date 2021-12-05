import React from "react";
import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";

function Posts({ posts }) {
  const [realTimePosts] = useCollection(
    firebase.firestore().collection("posts").orderBy("timestamp", "desc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      {realTimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          message={post.data().message}
          name={post.data().name}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
