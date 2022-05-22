import "./Styles/VideoActions.css";
import { useAuth } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import toastStyle from "../Utils/toastStyle";

export default function VideoActions() {

    const { isLoggedIn } = useAuth();

    const likeHandler = () => {

        isLoggedIn ? null :  toast((t) => (<p><b>Like this video?</b> <p style={{color:"#aaa"}}>Sign in to make your opinion count.</p></p>),
        {
          icon: '⚠️',
          style: toastStyle,
        }
      ); 
    }

    const playlistHandler = () => {

        isLoggedIn ? null :  toast((t) => (<p><b>Want to watch this again later?</b> <p style={{color:"#aaa"}}>Sign in to add this video to a playlist.</p></p>),
        {
          icon: '⚠️',
          style: toastStyle,
        }
      ); 
    }

    const watchlaterHandler = () => {

        isLoggedIn ? null :  toast((t) => (<p><b>Want to watch this later?</b> <p style={{color:"#aaa"}}>Sign in to add this video to Watch Later.</p></p>),
        {
          icon: '⚠️',
          style: toastStyle,
        }
      ); 
    }

    return (
        <div className="video-action-list">
            <div className="video-action flex-align-center" onClick={likeHandler}>
                <span className="material-icons-outlined">thumb_up</span>
                <p>Like</p>
            </div>
            <div className="video-action flex-align-center" onClick={watchlaterHandler}>
                <span class="material-icons-outlined">watch_later</span>
                <p>Watch Later</p>
            </div>
            <div className="video-action flex-align-center" onClick={playlistHandler}>
                <span class="material-icons-outlined">playlist_add</span>
                <p>Save</p>
            </div>

        </div>
    )

}