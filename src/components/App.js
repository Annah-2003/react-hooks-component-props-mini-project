import React from "react";
import blogData from "../data/blog";
import Header from "./Header"; import About from "./About"; import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  const aboutImageSrc = "https://via.placeholder.com/215";
  const aboutText = "Your blog's about text goes here."; const blogName = "Annah's blog";
  const posts = [
    { title: "Post 1", date: "October 15, 2023", preview: "Preview of Post 1" },
    { title: "Post 2", preview: "Preview of Post 2" },
    
  ];
  return (
    <div className="App"> <Header blogName={blogName} />
      <About imageSrc={aboutImageSrc} aboutText={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
