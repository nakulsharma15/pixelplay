import React, { useState } from "react";
import "./Styles/Modal.css";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { addPlaylist, addToPlaylist, deleteFromPlaylist } from "../Utils/handlePlaylist";

const Modal = ({ setShowModal, video }) => {

    const [playlistName, setPlaylistName] = useState({ title: "", description: "" });

    const { userState, userDispatch } = useUserDetails();

    const { playlists } = userState;

    const [isError, setIsError] = useState({ errorState: false, errorMessage: "" });

    const [isPlay, setIsPlay] = useState(false);

    const playlistNameHandler = (event) => {
        setPlaylistName((prev) => ({ ...prev, title: event.target.value }));

        setIsError((prev) => ({ ...prev, errorState: false, errorMessage: "" }))

    }

    const createPlaylistHandler = () => {

        if (playlistName.title.length < 1) {
            setIsError((prev) => ({ ...prev, errorState: true, errorMessage: "Playlist name cannot be empty" }));
        }
        else if (playlistName.title.length > 50) {
            setIsError({ errorState: true, errorMessage: "Playlist name must be less than 50 characters" });
        }
        else {
            let res = addPlaylist(playlistName, userDispatch);
            setIsError({ errorState: false, errorMessage: "" })
            setPlaylistName({ title: "", description: "" })
            // setShowModal(false);

        }

    }

    const findIfVideoInPlaylist = (playlist) =>
        playlist?.videos?.some((playlistVideo) => playlistVideo._id === video._id);

    const addToPlaylistHandler = (playlistId) => {
        addToPlaylist(playlistId, video, userDispatch);
        setIsPlay(true);

    }

    const removeFromPlaylistHandler = (playlist) => {
        deleteFromPlaylist(playlist, video, userDispatch)
        setIsPlay(false);

    }

    return (
        <>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header">
                            <p>Save to...</p>
                        </div>

                        <div className="playlist-container">

                            {playlists.map((playlist) => <div className="playlist-item-div" onClick={() => findIfVideoInPlaylist(playlist) ? removeFromPlaylistHandler(playlist) : addToPlaylistHandler(playlist._id)}>

                                { findIfVideoInPlaylist(playlist) ? <span className="material-icons playlist-check">check_box</span> : <span className="material-icons-outlined playlist-check playlist-uncheck">check_box_outline_blank</span>}

                                <p>{playlist.title}</p>
                            </div>)}

                        </div>

                        <div className="playlist-input">

                            <input type="text" placeholder="Create a new Playlist" onChange={playlistNameHandler} value={playlistName.title} style={isError.errorState === true ? { border: "2px solid red" } : null} />
                        </div>

                        <p className="error-message modal-error-message" style={isError.errorState === true ? { display: "block" } : { display: "none" }}>{isError.errorMessage}</p>

                        <div className="modal-actions">

                            <div className="actions-container">

                                <p className="action-txt" onClick={createPlaylistHandler}
                                >Create</p>

                                <p className="action-txt close-modal-txt" onClick={() => setShowModal(false)}> Close </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
