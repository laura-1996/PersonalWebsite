
import React from "react";
import { useParams } from "react-router";

const postsData = require("./_posts.json");

export default function Post() {
  var { slug } = useParams(),
    post = findPostBySlug(slug);

  return (
    <div className="post-content-view">
      <h2 className="title">{post.title}</h2>
      <content>{post.content}</content>
    </div>
  );
}

function findPostBySlug(slug) {
  return postsData.find(o => o.slug === slug);
}

