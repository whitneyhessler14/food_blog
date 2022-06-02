import "./Home.css"
import TitleHeader from "../../components/titleHeader/TitleHeader"
import Posts from "../../components/posts/Posts"

export default function Home() {
    return (
        <>
        <TitleHeader />
        <div className="home">
            <Posts />
        </div>
        </>
    )
}