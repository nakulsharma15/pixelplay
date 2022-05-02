import { Header, FilterPills, SideNav, VideoCard } from "../Components";
import "./Styles.css";
import {videos} from "../backend/db/videos";

export default function Home() {

    console.log(videos);

    return (
        <div>
            <Header />


            <div className="page-content">

                <SideNav />


                <div className="main-content">
                    <FilterPills />

                    <div className="video-list">
                        {videos.map((video) => <div key={video._id} className="video-card-div"><VideoCard Video={video} /></div>)}
                    </div>




                </div>

            </div>

        </div>)

}