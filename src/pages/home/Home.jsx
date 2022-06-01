import "./Home.css"
import TitleHeader from "../../components/titleHeader/TitleHeader"
import Posts from "../../components/posts/Posts"

export default function Home() {
    return (
        <>
        <div className="home">
            <TitleHeader />
            <Posts />
        </div>
        </>
    )
}