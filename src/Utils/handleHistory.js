import axios from "axios";
import toast from "react-hot-toast";
import toastStyle from "./toastStyle";

const historyHandler = async (videos, videoId, userDispatch) => {

    const videoToAdd = videos.find((video) => video._id === videoId);

    try {
        const response = await axios.post(
            "/api/user/history",
            { video: videoToAdd },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        const { status, data } = response;
        if (status === 201) {
            userDispatch({ type: "ADD_TO_HISTORY", payload: data?.history });
        }
    } catch (error) {
        if (error.response.status === 409) {
        } else {
            console.log(error);
        }
    }
}

const deleteHistoryHandler = async (videoId, userDispatch) => {

    try {
        const response = await axios.delete(`/api/user/history/${videoId}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        const { status, data } = response;
        if (status === 200 || status === 201) {
            userDispatch({ type: "REMOVE_FROM_HISTORY", payload: data?.history });
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again!", {
            style: toastStyle
        });
    }

}

const clearHistoryHandler = async (userDispatch) => {

    try {
        const response = await axios.delete(`/api/user/history/all`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        const { status, data } = response;
        if (status === 200 || status === 201) {
            userDispatch({ type: "CLEAR_HISTORY", payload: data?.history });
            toast.success("Watch history cleared", { style: toastStyle });
        }
    } catch (error) {
        console.log(error);
        toast.error("Couldn't clear History", { style: toastStyle });
    }

}

export { historyHandler,deleteHistoryHandler , clearHistoryHandler };