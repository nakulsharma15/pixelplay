import "./Styles/HorizontalVideoCard.css";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import toastStyle from "../Utils/toastStyle";

export default function HorizontalVideoCard({ Video, Type }) {

    const { userDispatch } = useUserDetails();

    const deleteHistoryHandler = async (videoId, userDispatch) => {

        try {
            const response = await axios.delete(`/api/user/history/${videoId}`, {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            });
            const { status, data } = response;
            if (status === 200 || status === 201) {
                userDispatch({ type: "REMOVE_FROM_HISTORY", payload: data?.history });
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again!", {
                style: toastStyle
            });
        }

    }

    const unlikeHandler = async (videoId, userDispatch) => {

        try {
            const res = await axios.delete(`/api/user/likes/${videoId}`, {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            });
            if (res.status === 200 || res.status === 201) {
                console.log(likes);
                userDispatch({ type: "REMOVE_FROM_LIKED", payload: likes });
                toast("Video Unliked!", {
                    icon: '💔',
                    style: toastStyle
                });
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong. Please try again!", {
                style: toastStyle
            });
        }

    }

    const removeButtonHandler = (Type) => {
        if (Type === "History") {
            deleteHistoryHandler(Video._id, userDispatch);
        }

        else if (Type === "Liked") {
            unlikeHandler(Video._id, userDispatch);
        }

    }

    return (
        <div className="horz-video-card">

            <div className="horz-video-thumbnail">
                <img src={Video.thumbnail} alt={Video.title} />
            </div>

            <div className="horz-video-info">

                <div className="horz-video-header">

                    <div>
                        <p className="horz-video-title">{Video.title}</p>
                        <div className="video-creator flex-align-center horz-video-creater-div">
                            <p>{Video.creator}</p>
                            <span className="material-icons">check_circle</span>
                        </div>
                    </div>
                    {/* Type === "History" ? deleteHistoryHandler(Video._id, userDispatch) : null */}
                    <button className="delete-history-btn" onClick={() => removeButtonHandler(Type)}><span className="material-icons-outlined">delete_outline</span></button>

                </div>

                <div className="horz-video-footer">
                    <p>{Video.description}</p>
                </div>

            </div>

        </div>
    )
}