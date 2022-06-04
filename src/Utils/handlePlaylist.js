import axios from "axios";
import toast from "react-hot-toast";
import toastStyle from "./toastStyle";

const addPlaylist = async (playlistData, userDispatch) => {
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
            toast("Playlist Created!", {
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

const addToPlaylist = async (playlistID, video, userDispatch) => {
    try {
        const response = await axios.post(
            `/api/user/playlists/${playlistID}`,
            {
                video,
            },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        const { status, data } = response;
        if (status === 200 || status === 201) {
            userDispatch({ type: "ADD_TO_PLAYLIST", payload: data?.playlist });
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

const deleteFromPlaylist = async (playlist, video, userDispatch) => {
    try {
        const response = await axios.delete(
            `/api/user/playlists/${playlist?._id}/${video?._id}`,
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        const { status, data } = response;
        if (status === 200 || status === 201) {
            userDispatch({ type: "DELETE_FROM_PLAYLIST", payload: data?.playlist });
            toast("Video removed from playlist!", {
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


export { addPlaylist, addToPlaylist, deleteFromPlaylist }