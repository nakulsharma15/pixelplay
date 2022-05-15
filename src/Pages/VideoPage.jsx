import { Header,  SideNav} from "../Components";
import "./Styles.css";
import YouTube from 'react-youtube';

export default function VideoPage() {

    const videoId = "C1YfOTAD42M";
    const opts = {
        height: '390',
        width: '780',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters for more info
          autoplay: 1,
        },
      };

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                   <div className="video-section">
                       <div className="video-player">
                       <YouTube videoId={videoId} opts={opts}/>
                       </div>
                       <div className="video-actions"></div>
                   </div>
                </div>

            </div>

        </div>
    )

}