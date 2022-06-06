import "./Home.css";
import TitleHeader from "../../components/titleHeader/TitleHeader";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axios.get("/posts")
        setPosts(res.data)
    }
    fetchPosts();
},[])
    return (
        <>
        <TitleHeader />
        <div className="home">
            <Posts posts={posts} />
        </div>
        </>
    )
}