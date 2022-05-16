import { Header, SideNav, VideoActions } from "../Components";
import "./Styles.css";
import YouTube from 'react-youtube';

export default function VideoPage() {

    const videoId = "C1YfOTAD42M";
    const opts = {
        height: '390',
        width: '780',
        playerVars: {
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
                            <YouTube videoId={videoId} opts={opts} />
                        </div>
                        <div className="video-name">
                            <p>Moto G52 Unboxing *Budget Phone Flagship Display*!</p>
                        </div>
                        <div className="video-actions">

                            <div className="channel-info">
                                <div className="avatar">
                                    <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651484675/PixelPlay%20Video%20Library/Channel%20Avatar/download_ebfogs.jpg" alt="video" />
                                </div>
                                <p>Tech Burner</p>
                            </div>

                            <VideoActions />
                        </div>
                        <div className="video-info">
                            <p>Namaskar Dosto, maine is video mein aapse #iQOOZ6 Pro5G #FullyLoaded Smartphone ke baare mein baat ki hai aur share ki hai iQOO Z6 Pro 5G Smartphone ki unboxing aur ek first look.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}