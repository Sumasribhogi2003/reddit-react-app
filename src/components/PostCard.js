// src/components/PostCard.js
import React from "react";
import parse from "html-react-parser";
import "./PostCard.css"; // Optional CSS

const PostCard = ({ title, selftext_html, url, score }) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <div className="post-content">{selftext_html ? parse(selftext_html) : <i>No description</i>}</div>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
      <p>Score: {score}</p>
    </div>
  );
};

export default PostCard;
