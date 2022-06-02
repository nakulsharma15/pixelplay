import "./Styles.css";
import { Header, SideNav, HorizontalVideoCard } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";

export default function WatchLater() {

    const { userState } = useUserDetails();

    const { watchlater } = userState;

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>Watch Later</h1>
                            {watchlater.length === 0 ? <p>Videos you add to watch later will appear here</p> : <p>Here are the videos you added to watch later: </p>}

                        </div>

                    </div>

                    {watchlater.length === 0 ? <p className="empty-list-text">No videos in this playlist yet</p> :
                        <div className="horz-video-list">
                            {watchlater.map((video) => <div key={video._id}><HorizontalVideoCard Video={video} Type={"WatchLater"} /></div>)}
                        </div>}

                </div>

            </div>

        </div>
    )

}