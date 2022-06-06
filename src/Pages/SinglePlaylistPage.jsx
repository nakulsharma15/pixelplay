import "./Styles.css";
import { Header, SideNav, HorizontalVideoCard } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { deletePlaylist } from "../Utils/handlePlaylist";

export default function SinglePlaylistPage() {

    const { userState, userDispatch } = useUserDetails();

    const navigate = useNavigate();

    const { playlists } = userState;

    const { playlistId } = useParams();

    const playlistToShow = playlists?.find((playlist) => playlist._id === playlistId);
    console.log(playlistToShow);

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>{playlistToShow.title}</h1>
                            {playlistToShow.videos.length === 0 ? <p>Videos you save in this playlist will show up here.</p> : <p>Here are the videos you saved: </p>}

                        </div>

                        <button className="btn icon-btn clear-history-btn" onClick={() => {deletePlaylist(playlistToShow, userDispatch); navigate("/playlist")}}>Delete Playlist<span className="material-icons-outlined">delete</span></button> 

                    </div>

                    {playlistToShow.videos.length === 0 ? <p className="empty-list-text">No videos in this playlist yet</p> :
                        <div className="horz-video-list">
                            {playlistToShow.videos.map((video) => <HorizontalVideoCard Video={video} Type={"PlaylistVideo"} Playlist={playlistToShow} />)}
                        </div>}

                </div>

            </div>

        </div>


    )

}