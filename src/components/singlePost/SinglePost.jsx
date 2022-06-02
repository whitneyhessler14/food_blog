import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <img 
            src="https://www.almanac.com/sites/default/files/styles/max_1300x1300/public/image_nodes/beets_by_darasp_kran_ss_crop.jpg?itok=nwddFT4d"
            alt=""
            className="singlePostImg" />
            <h1>SinglePostTitle
                <div className="singlePostEdit">
                    <button className="editButton">Edit</button>
                    <button className="deleteButton">Delete</button>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: Whitney Hessler</span>
            </div>
        </div>
    )
}