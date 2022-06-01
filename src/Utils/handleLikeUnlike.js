import axios from "axios";
import toast from "react-hot-toast";
import toastStyle from "./toastStyle";

const addToLikeHandler = async (Video, userDispatch) => {
    const videoToLike = Video;
    try {
        const res = await axios.post(
            "/api/user/likes",
            { video: videoToLike },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        if (res.status === 200 || res.status === 201) {
            const { likes } = res.data;
            userDispatch({ type: "ADD_TO_LIKED", payload: likes })
            toast("Video Liked!", {
                icon: '❤️',
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

const unLikeHandler = async (videoId, userDispatch) => {

    try {
        const res = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { likes } = res.data;
            userDispatch({ type: "REMOVE_FROM_LIKED", payload: likes });
            toast("Video Unliked!", {
                icon: '💔',
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

export { addToLikeHandler, unLikeHandler }