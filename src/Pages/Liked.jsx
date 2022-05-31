import "./Styles.css";
import { Header, SideNav, HorizontalVideoCard } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";

export default function Liked() {

    const { userState } = useUserDetails();

    const { liked } = userState;

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>Liked Videos</h1>
                            <p>Videos you liked will appear here</p>
                        </div>

                    </div>

                    {liked.length === 0 ? <p className="empty-list-text">No videos in this playlist yet</p> :
                        <div className="horz-video-list">
                            {liked.map((video) => <div key={video._id}><HorizontalVideoCard Video={video} Type={"Liked"} /></div>)}
                        </div>}

                </div>

            </div>

        </div>
    )

}