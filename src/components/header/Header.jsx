import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="leftHeader"></div>
            <div className="centerHeader">
                <ul className="topHeader">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul> 
            </div>
            <div className="rightHeader">
                <img    
                    className="profilePicture"
                    src="https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640-500x500.png"
                    alt=""
                />
            </div>
        </div>
    )
    }