import { Header,  SideNav} from "../Components";
import "./Styles.css";


export default function VideoPage() {

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                   <div className="video-section">
                       <div className="video-player"></div>
                       <div className="video-actions"></div>
                   </div>
                </div>

            </div>

        </div>
    )

}