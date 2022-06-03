import axios from "axios";
import toast from "react-hot-toast";
import toastStyle from "./toastStyle";

export const addPlaylist = async (playlistData, userDispatch) => {
    try {
        const response = await axios.post(
            "/api/user/playlists",
            {
                playlist: playlistData,
            },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        const { status, data } = response;
        if (status === 200 || status === 201) {
            userDispatch({ type: "ADD_PLAYLIST", payload: data?.playlists });
            toast("Video added to playlist!", {
                icon: '💾',
                style: toastStyle
            });
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again!", {
            style: toastStyle
        });
    }
};