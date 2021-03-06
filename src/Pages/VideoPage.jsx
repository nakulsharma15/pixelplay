import { Header, SideNav, VideoActions } from "../Components";
import "./Styles.css";
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import useAxios from "../Utils/useAxios";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { historyHandler } from "../Utils/handleHistory";
import Modal from "../Components/Modal";
import { useVideo } from "../Contexts/VideoContext/VideoContext";

export default function VideoPage() {

    const { userDispatch } = useUserDetails();

    const { videoId } = useParams();
    const { showModal, setShowModal } = useVideo();

    const opts = {
        height: '390',
        width: '780',
        playerVars: {
            autoplay: 1,
        },
    };

    let videos = [];

    const { responseData, isLoading } = useAxios("/api/videos");

    if (isLoading === false)
        videos = (responseData.videos);

    const videoToPlay = videos.find((video) => video._id === videoId);


    return (
        isLoading ||
        <div>
            {showModal && <Modal setShowModal={setShowModal} video={videoToPlay}/>}
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                    <div className="video-section">
                        <div className="video-player">
                            <YouTube videoId={videoId} opts={opts} onReady={() => historyHandler(videos, videoId, userDispatch)} />
                        </div>
                        <div className="video-name">
                            <p>{videoToPlay.title}</p>
                        </div>
                        <div className="video-actions">

                            <div className="channel-info">
                                <div className="avatar">
                                    <img src={videoToPlay.avatar} alt="video" />
                                </div>
                                <div className="video-creator-div flex-align-center">
                                    <p>{videoToPlay.creator}</p>
                                    <span className="material-icons">check_circle</span>
                                </div>

                            </div>

                            <VideoActions Video={videoToPlay} />
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