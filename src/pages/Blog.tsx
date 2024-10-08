import data from "../data/BlogPostsData.json";
import "./Pages.css";

const Blog = () => {
    console.log(data.posts);
    return (
        <>
        <div className="blog-container">
            <h1>BLOG!!</h1>
            {data.posts.map((item, idx) => {
                return (
                    <div key={item.title} className="blog-post-container">
                        <div className="blog-header">
                            <h2>{item.title}</h2>
                            <p className="blog-preview-text"> {item.date} </p>
                        </div>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Blog;