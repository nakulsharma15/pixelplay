import "./Styles.css";
import { Header, SideNav } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { Link } from "react-router-dom";


export default function Playlist() {

    const { userState } = useUserDetails();

    const { playlists } = userState;

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>Playlists</h1>
                            {playlists.length === 0 ? <p>Playlists you create or save will show up here.</p> : <p>Here are the playlists you created or saved: </p>}

                        </div>

                    </div>

                    {playlists.length === 0 ? <p className="empty-list-text">No playlists yet</p> :
                        <div className="playlist-page-item-container">
                            {playlists.map((playlist) => <Link to={`/playlist/${playlist._id}`} key={playlist._id} className="playlist-page-item-div"> <p> {playlist.title} </p></Link>)}
                        </div>}

                </div>

            </div>

        </div>


    )

}