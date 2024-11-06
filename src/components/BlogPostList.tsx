import { useState } from "react";
import data from "../data/BlogPostsData.json";


const BlogPostList = ({ results }) => {

    return (
        <div className="search-result">
            {results.map((item, idx) =>
            { return (
                <div className = "blogPostContainer">
                    <div className="blog-header">
                        <h2>{item.title}</h2>
                        <p>{item.date}</p>
                        </div>
                        <p>{item.body}</p>
                    </div>
            )}
            )}
        </div>
    )


}

export default BlogPostList