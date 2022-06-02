import axios from "axios";
import toast from "react-hot-toast";
import toastStyle from "./toastStyle";

const addToWatchLaterHandler = async (Video, userDispatch) => {

    try {
        const res = await axios.post(
            "/api/user/watchlater",
            { video: Video },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        if (res.status === 200 || res.status === 201) {
            const { watchlater } = res.data;
            userDispatch({ type: "ADD_TO_WATCHLATER", payload: watchlater });
            toast("Added to Watch Later", {
                icon: '🕓',
                style: toastStyle
            });
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again!", {
            style: toastStyle
        });
    }
}

const removeFromWatchLater = async (videoId, userDispatch) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { watchlater } = res.data;
            userDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: watchlater });
            toast("Removed from Watch Later", {
                icon: '🕓',
                style: toastStyle
            });
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again!", {
            style: toastStyle
        });
    }
}

export { addToWatchLaterHandler, removeFromWatchLater }