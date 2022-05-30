import { Header, SideNav, VideoActions } from "../Components";
import "./Styles.css";
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import useAxios from "../Utils/useAxios";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import axios from "axios";

export default function VideoPage() {

    const { userState, userDispatch } = useUserDetails();

    const { videoId } = useParams();

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

    const videoToPlay = videos.find((video) => video._id === videoId)

    console.log(videoToPlay);

    const historyHandler = async (videoId, userDispatch) => {

        const videoToAdd = videos.find((video) => video._id === videoId);

        try {
            const response = await axios.post(
                "/api/user/history",
                { video: videoToAdd },
                {
                    headers: {
                        authorization: localStorage.getItem("Token"),
                    },
                }
            );
            const { status, data } = response;
            if (status === 201) {
                userDispatch({ type: "ADD_TO_HISTORY", payload: data?.history });
                console.log("video added");
            }
        } catch (error) {
            if (error.response.status === 409) {
            } else {
                console.log("Couldn't add to History", error);
            }
        }
    };



    return (
        isLoading ||
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                    <div className="video-section">
                        <div className="video-player">
                            <YouTube videoId={videoId} opts={opts} onReady={() => historyHandler(videoId, userDispatch)} />
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

                            <VideoActions Video={videoToPlay}/>
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