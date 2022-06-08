import "./Home.css";
import TitleHeader from "../../components/titleHeader/TitleHeader";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import {axiosInstance} from "../../config";
import { useLocation } from "react-router";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axiosInstance.get("/posts"+ search)
        setPosts(res.data)
    }
    fetchPosts();
},[search])
    return (
        <>
        <TitleHeader />
        <div className="home">
            <Posts posts={posts} />
        </div>
        </>
    )
}