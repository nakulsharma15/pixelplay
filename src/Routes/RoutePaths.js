import { Route, Routes } from "react-router-dom";
import {Home,Playlist,History,MockMan,Liked,Login,Signup,WatchLater,VideoPage,SinglePlaylistPage,NoMatch} from "../Pages/index";
import RequireAuth from "../Utils/requiresAuth.js";

function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
        <Route path="/playlist" element={<RequireAuth><Playlist /></RequireAuth>}/>
        <Route path="/liked" element={<RequireAuth><Liked /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watchlater" element={<RequireAuth><WatchLater /></RequireAuth> } />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/watch/:videoId" element={<VideoPage />} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylistPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    )
}
export default RoutePaths;