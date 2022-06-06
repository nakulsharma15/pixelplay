import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <VideoContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </VideoContext.Provider>)

}

export { useVideo, VideoProvider };