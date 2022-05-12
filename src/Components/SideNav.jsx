import "./Styles/SideNav.css";

export default function SideNav() {

    return (
        <div className="sidenav-menu">

            <div className="menu-item">
                <span class="material-symbols-rounded">home</span>
                <p>Home</p>
            </div>

            <div className="menu-item">
                <span class="material-symbols-outlined">playlist_add</span>
                <p>Playlists</p>
            </div>

            <div className="menu-item">
                <span class="material-symbols-outlined">thumb_up</span>
                <p>Liked videos</p>
            </div>

            <div className="menu-item">
                <span class="material-symbols-outlined">schedule</span>
                <p>Watch Later</p>
            </div>

            <div className="menu-item">
                <span class="material-symbols-outlined">history</span>
                <p>History</p>
            </div>

        </div>

    )

}