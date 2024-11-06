import data from "../data/BlogPostsData.json";
import "./Pages.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import BlogPostList from '../components/BlogPostList';


const Blog = () => {
    const [results, setResults] = useState(data.posts)
    if (results.length === 0) {
        setResults(data.posts)
    }
  
    return (
        <>
        <div className="blog-container">
            <h1>BLOG!!</h1>
            <div>
            <SearchBar setResults={setResults}/>
            {results && results.length > 0 && <BlogPostList results={results}/>}
            </div>
      
        </div>
        </>
    )
}

export default Blog;