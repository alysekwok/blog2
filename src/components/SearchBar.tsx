import { useState } from "react";
import data from "../data/BlogPostsData.json";


const SearchBar = ({setResults}) => {
    const [search, setSearch] = useState('');

    const searchData = (value) => {
        const results = data.posts.filter((post) => {
            return (
                value && post && post.title && post.title.toLowerCase().includes(value)
            )
        })
        console.log(results)
        if (!results) {
            setResults(data)
        } else {
            setResults(results)
        }

    }
    
    const handleChange = (value) => {
        setSearch(value)
        console.log(search)
        searchData(value)
        if (!value) {
            setSearch(" ")
        }
    };

    return (
        <div>
            <input type="text" onChange={(e)=>handleChange(e.target.value)} placeholder="Search Blog Titles..."
            />
        </div>
    )
}

export default SearchBar;