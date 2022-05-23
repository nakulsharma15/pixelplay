import "./Styles/SideNav.css";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import toastStyle from "../Utils/toastStyle";
import { useAuth } from "../Contexts/AuthContext";

export default function SideNav() {

    const { isLoggedIn } = useAuth();

    const navigateHandler = () => {

        return isLoggedIn ? null :  toast('You need to login to continue!',
        {
          icon: '⚠️',
          style: toastStyle,
        }
      ) ;
    }

    return (
        <div className="sidenav-menu">
            
            <NavLink to="/">
                <div className="menu-item">
                    <span className="material-symbols-rounded">home</span>
                    <p>Home</p>
                </div>
            </NavLink>

            <NavLink to="/playlist" onClick={navigateHandler}>
                <div className="menu-item">
                    <span className="material-symbols-outlined">playlist_add</span>
                    <p>Playlists</p>
                </div>
            </NavLink>

            <NavLink to="/liked" onClick={navigateHandler}>
                <div className="menu-item">
                    <span className="material-symbols-outlined">thumb_up</span>
                    <p>Liked videos</p>
                </div>
            </NavLink>

            <NavLink to="/watchlater" onClick={navigateHandler}>
                <div className="menu-item">
                    <span className="material-symbols-outlined">schedule</span>
                    <p>Watch Later</p>
                </div>
            </NavLink>

            <NavLink to="/history" onClick={navigateHandler}>
                <div className="menu-item">
                    <span className="material-symbols-outlined">history</span>
                    <p>History</p>
                </div>
            </NavLink>


        </div>

    )

}