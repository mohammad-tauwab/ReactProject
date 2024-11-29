import { createContext, useEffect, useReducer, useState } from "react";
import Spinner from "../component/Spinner";

export const postContext = createContext([]);

let post = [];

const setCurrentPost = (currentPostList, action) => {
  let updatedPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    updatedPostList = currentPostList.filter((post) => {
      return post.id !== action.payload;
    });
  }
  if (action.type === "CREATE_POST") {
    updatedPostList = [action.payload, ...currentPostList];
  }
  if (action.type === "INITIAL_POST") {
    updatedPostList = action.payload;
  }
  return updatedPostList;
};

const PostListProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatchCurrentPost({
          type: "INITIAL_POST",
          payload: data.posts,
        });
        setFetching(false);
      });
  }, []);
  // defining the component here
  let [postData, dispatchCurrentPost] = useReducer(setCurrentPost, post);
  let deletePost = (id) => {
    dispatchCurrentPost({
      type: "DELETE_POST",
      payload: id,
    });
  };

  let createPost = (e) => {
    let id = postData.length;
    let updatePost = {
      id,
      title: e.target[0].value,
      body: e.target[1].value,
      tags: e.target[2].value.split(","),
      reactions: {
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
      },
    };
    dispatchCurrentPost({
      type: "CREATE_POST",
      payload: updatePost,
    });
  };

  return (
    <postContext.Provider value={{ postData, deletePost, createPost }}>
      {fetching && <Spinner></Spinner>}
      {children}
    </postContext.Provider>
  );
};
export default PostListProvider;
