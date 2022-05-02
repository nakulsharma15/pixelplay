import { Header, FilterPills, SideNav, VideoCard } from "../Components";
import "./Styles.css";

export default function Home() {

    return (
        <div>
            <Header />


            <div className="page-content">

                <SideNav />


                <div className="main-content">
                    <FilterPills />

                    <div className="video-list">
                        <VideoCard />
                    </div>




                </div>

            </div>

        </div>)

}