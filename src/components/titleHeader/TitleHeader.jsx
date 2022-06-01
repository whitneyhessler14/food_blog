import "./TitleHeader.css"

export default function TitleHeader() {
    return (
        <div className="titleHeader">
            <div className="headerTitles">
                <span className="headerTitleSm"></span>
                <span className="headerTitleLg">Beets Me</span>
            </div> 
            <img 
                className="headerImg"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2018%2F08%2F01%2Fbeets-blue.jpg"
                alt=""
            />    
        </div>
    );
}