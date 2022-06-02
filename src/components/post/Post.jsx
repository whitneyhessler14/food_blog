import "./post.css"

export default function Post () {
    return (
        <div className="post">
            <img
                className= "postImg"
                src="https://cdn.harvesttotable.com/htt/2017/01/23183335/Beets-in-rows.jpg"
                alt=""
             />   
             <div className="postInfo">
                <span className="postTitle">Growing Beets</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
             </div>
             <p className= "postDesc">A staple in our gardens, beets grow easily and you won’t have to wait long to harvest their tasty roots. You can eat their green tops, too, so they’re a dual-purpose crop! Learn all you need to know about growing beets—from planting to harvest. Beets—or “beet roots”—are a colorful, cool-season crop that is easy to grow from seed in well-prepared soil and grows quickly in full sun. They are a great choice for northern gardeners because they can survive frost and near-freezing temperatures. This also makes them great as a fall crop. If you are a beginner, look for bolt-resistant varieties, which have less of a chance of bolting (maturing too quickly) in warm weather. There are many different varieties of beets, showcasing deep red, yellow, white, or striped roots of different shapes.  Beet roots can be harvested from the time they’re about the size of a golf ball to the size of a tennis ball; larger roots may be tough and woody. Plus, beet greens have a delicious and distinctive flavor and hold even more nutrition than the roots!</p>
        </div>
    )
}