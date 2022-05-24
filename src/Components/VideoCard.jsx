import "./Styles/VideoCard.css";
import { Link } from "react-router-dom";

export default function VideoCard({ Video }) {

    const truncateTitle = title => {
        if(title.length < 52) return title
        return title.slice(0,52)+"...";
    }

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
                            <p>{truncateTitle(Video.title)}</p>
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