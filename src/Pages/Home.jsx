import { Header, FilterPills, SideNav, VideoCard } from "../Components";
import "./Styles.css";
import { useFilter } from "../Filters/FilterContext";
import useAxios from "../Utils/useAxios";


export default function Home() {

    let videos = [];
    const { filterState, filterDispatch } = useFilter();
    const { filterSelected } = filterState;

    const {responseData , isLoading} = useAxios("/api/videos");

    if(isLoading === false)
     videos = (responseData.videos);

    let filteredVideos = videos; 

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