import { Header, SideNav, VideoActions } from "../Components";
import "./Styles.css";
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import useAxios from "../Utils/useAxios";

export default function VideoPage() {

    const {videoId} = useParams();

    const opts = {
        height: '390',
        width: '780',
        playerVars: {
            autoplay: 1,
        },
    };

    let videos = [];

    const {responseData , isLoading} = useAxios("/api/videos");

    if(isLoading === false)
     videos = (responseData.videos);
    
    const videoToPlay = videos.find((video) => video._id === videoId)

    console.log(videoToPlay)

    return (
        isLoading ||
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                    <div className="video-section">
                        <div className="video-player">
                            <YouTube videoId={videoId} opts={opts} />
                        </div>
                        <div className="video-name">
                            <p>{videoToPlay.title}</p>
                        </div>
                        <div className="video-actions">

                            <div className="channel-info">
                                <div className="avatar">
                                    <img src={videoToPlay.avatar} alt="video" />
                                </div>
                                <p>{videoToPlay.creator}</p>
                            </div>

                            <VideoActions />
                        </div>
                        <div className="video-desc">
                            <p>{videoToPlay.description}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}