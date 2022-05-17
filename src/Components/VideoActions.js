import "./Styles/VideoActions.css";

export default function VideoActions() {

    return (
        <div className="video-action-list">
            <div className="video-action flex-align-center">
                <span className="material-icons-outlined">thumb_up</span>
                <p>Like</p>
            </div>
            <div className="video-action flex-align-center">
                <span class="material-icons-outlined">watch_later</span>
                <p>Watch Later</p>
            </div>
            <div className="video-action flex-align-center">
                <span class="material-icons-outlined">playlist_add</span>
                <p>Save</p>
            </div>

        </div>
    )

}