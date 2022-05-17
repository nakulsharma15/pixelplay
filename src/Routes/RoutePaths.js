import { Route, Routes } from "react-router-dom";
import {Home,Playlist,History,MockMan,Liked,Login,Signup,WatchLater,VideoPage} from "../Pages/index";

function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />}/>
        <Route path="/liked" element={<Liked />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/watch/:videoId" element={<VideoPage />} />
      </Routes>
    )
}
export default RoutePaths;