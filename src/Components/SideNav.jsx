import "./Styles/SideNav.css";
import { NavLink } from "react-router-dom";

export default function SideNav() {

    return (
        <div className="sidenav-menu">
            
            <NavLink to="/">
                <div className="menu-item">
                    <span class="material-symbols-rounded">home</span>
                    <p>Home</p>

                </div>
            </NavLink>

            <NavLink to="/playlist">
                <div className="menu-item">
                    <span class="material-symbols-outlined">playlist_add</span>
                    <p>Playlists</p>
                </div>
            </NavLink>

            <NavLink to="/liked">
                <div className="menu-item">
                    <span class="material-symbols-outlined">thumb_up</span>
                    <p>Liked videos</p>
                </div>
            </NavLink>

            <NavLink to="/watchlater">
                <div className="menu-item">
                    <span class="material-symbols-outlined">schedule</span>
                    <p>Watch Later</p>
                </div>
            </NavLink>

            <NavLink to="/history">
                <div className="menu-item">
                    <span class="material-symbols-outlined">history</span>
                    <p>History</p>
                </div>
            </NavLink>


        </div>

    )

}