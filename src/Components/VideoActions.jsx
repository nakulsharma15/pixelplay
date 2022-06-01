import "./Styles/VideoActions.css";
import { useAuth } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import toastStyle from "../Utils/toastStyle";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { addToLikeHandler, unLikeHandler } from "../Utils/handleLikeUnlike";
import { addToWatchLaterHandler, removeFromWatchLater } from "../Utils/handleWatchLater";

export default function VideoActions({ Video }) {

  const { isLoggedIn } = useAuth();
  const { userState, userDispatch } = useUserDetails();

  const { liked, watchlater } = userState;

  const likeHandler = () => {

    isLoggedIn ? addToLikeHandler(Video, userDispatch) : toast((t) => (<p><b>Like this video?</b> <p style={{ color: "#aaa" }}>Log in to make your opinion count.</p></p>),
      {
        icon: '⚠️',
        style: toastStyle,
      }
    );
  }

  const playlistHandler = () => {

    isLoggedIn ? null : toast((t) => (<p><b>Want to watch this again later?</b> <p style={{ color: "#aaa" }}>Log in to add this video to a playlist.</p></p>),
      {
        icon: '⚠️',
        style: toastStyle,
      }
    );
  }

  const watchlaterHandler = () => {

    isLoggedIn ? addToWatchLaterHandler(Video, userDispatch) : toast((t) => (<p><b>Want to watch this later?</b> <p style={{ color: "#aaa" }}>Log in to add this video to Watch Later.</p></p>),
      {
        icon: '⚠️',
        style: toastStyle,
      }
    );
  }

  const isVideoLiked = liked.find((video) => video._id === Video._id) === undefined ? false : true;

  const isWatchLater = watchlater.find((video) => video._id === Video._id) === undefined ? false : true;

  return (
    <div className="video-action-list">
      <div className="video-action flex-align-center" onClick={isVideoLiked ? () => unLikeHandler(Video._id, userDispatch) : likeHandler}>
        {isVideoLiked ? <span className="material-icons">thumb_up</span> : <span className="material-icons-outlined">thumb_up</span>}

        <p>Like</p>
      </div>
      <div className="video-action flex-align-center" onClick={isWatchLater ? () => removeFromWatchLater(Video._id, userDispatch) : watchlaterHandler}>
        {isWatchLater ? <span className="material-icons">watch_later</span> : <span className="material-icons-outlined">watch_later</span>}

        <p>Watch Later</p>
      </div>
      <div className="video-action flex-align-center" onClick={playlistHandler}>
        <span className="material-icons-outlined">playlist_add</span>
        <p>Save</p>
      </div>

    </div>
  )

}