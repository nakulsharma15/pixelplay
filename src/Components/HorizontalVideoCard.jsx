import "./Styles/HorizontalVideoCard.css";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { unLikeHandler } from "../Utils/handleLikeUnlike";
import { deleteHistoryHandler } from "../Utils/handleHistory";
import { removeFromWatchLater } from "../Utils/handleWatchLater";

export default function HorizontalVideoCard({ Video, Type }) {

    const { userDispatch } = useUserDetails();

    const removeButtonHandler = (Type) => {

        switch(Type) {
            case "History": deleteHistoryHandler(Video._id, userDispatch); break;

            case "Liked": unLikeHandler(Video._id, userDispatch); break;

            case "WatchLater": removeFromWatchLater(Video._id, userDispatch); break; 
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
            
                    <button className="delete-history-btn" onClick={() => removeButtonHandler(Type)}><span className="material-icons-outlined">delete_outline</span></button>

                </div>

                <div className="horz-video-footer">
                    <p>{Video.description}</p>
                </div>

            </div>

        </div>
    )
}