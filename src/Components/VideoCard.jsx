import "./Styles/VideoCard.css";
import { Link } from "react-router-dom";

export default function VideoCard({ Video }) {

    return (
        <div className="video-card">

            <Link to={`/watch/${Video._id}`}>
                <div className="video-thumbnail">
                    <img src={Video.thumbnail} alt="video" />
                </div>

                <div className="video-footer">

                    <div className="avatar">
                        <img src={Video.avatar} alt="video" />
                    </div>

                    <div className="video-info">
                        <div className="video-title">
                            <p>{Video.title}</p>
                        </div>

                        <div className="video-creator flex-align-center">
                            <p>{Video.creator}</p>
                            <span className="material-icons">check_circle</span>
                        </div>

                    </div>

                </div>

            </Link>






        </div>
    )

}