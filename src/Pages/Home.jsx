import { Header, FilterPills, SideNav, VideoCard } from "../Components";
import "./Styles.css";
import { videos } from "../backend/db/videos";
import { useFilter } from "../Filters/FilterContext";


export default function Home() {

    let filteredVideos = videos;
    const { filterState, filterDispatch } = useFilter();
    const { filterSelected } = filterState;

    if(filterSelected !== "All")
    filteredVideos = videos.filter((video) => video.category === filterSelected);

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">
                    <FilterPills />

                    <div className="video-list">
                        {filteredVideos.map((video) => <div key={video._id} className="video-card-div"><VideoCard Video={video} /></div>)}
                    </div>

                </div>

            </div>

        </div>
    )

}