import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePostWrapper">
            <img 
            src="https://www.almanac.com/sites/default/files/styles/max_1300x1300/public/image_nodes/beets_by_darasp_kran_ss_crop.jpg?itok=nwddFT4d"
            alt=""
            className="singlePostImg" />
            <h1 className="singlePostTitle">Growing Beets
                <div className="singlePostEdit">
                    <button className="editButton">Edit</button>
                    <button className="deleteButton">Delete</button>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: Whitney Hessler</span>
                <span className="singlePostDate"> June 1, 2022</span>
            </div>
            <p className="postBody">
            A staple in our gardens, beets grow easily and you won’t have to wait long to harvest their tasty roots. You can eat their green tops, too, so they’re a dual-purpose crop! Learn all you need to know about growing beets—from planting to harvest. Beets—or “beet roots”—are a colorful, cool-season crop that is easy to grow from seed in well-prepared soil and grows quickly in full sun. They are a great choice for northern gardeners because they can survive frost and near-freezing temperatures. This also makes them great as a fall crop. If you are a beginner, look for bolt-resistant varieties, which have less of a chance of bolting (maturing too quickly) in warm weather. There are many different varieties of beets, showcasing deep red, yellow, white, or striped roots of different shapes.  Beet roots can be harvested from the time they’re about the size of a golf ball to the size of a tennis ball; larger roots may be tough and woody. Plus, beet greens have a delicious and distinctive flavor and hold even more nutrition than the roots!
            </p>
        </div>
    )
}