import "./Header.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import { useContext } from "react"

export default function Header() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="header">
            <div className="leftHeader"></div>
            <div className="centerHeader">
            <ul className="topHeader">
                <li className="topListItem">
                     <Link className="link" to="/">
                        HOME
                     </Link>
                </li>
                <li className="topListItem">
                     <Link className="link" to="/write">
                        WRITE
                     </Link>
                </li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
            </div>
            <div className="rightHeader">
                {user ? (
                <img    
                    className="profilePicture"
                    src="https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640-500x500.png"
                    alt=""
                />
                ) : (
                    <ul className="topHeader">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
                }
            </div>
        </div>
    )
    }