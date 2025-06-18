// src/App.js
import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        const children = data.data.children.map((child) => child.data);
        setPosts(children);
      });
  }, []);

  return (
    <div className="app">
      <h1>Reddit /r/reactjs Posts</h1>
      <div className="card-container">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            selftext_html={post.selftext_html}
            url={post.url}
            score={post.score}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
