import React, { useState } from "react";
import "./Styles/Modal.css";

const Modal = ({ setShowModal }) => {

    const [playlistName, setPlaylistName] = useState("");

    const [isError, setIsError] = useState({errorState:false, errorMessage:""});

    const playlistNameHandler = (event) => {
        setPlaylistName(event.target.value);

        if(playlistName.length < 1 || playlistName.length > 5) {
            setIsError((prev) => ({...prev , errorState: false , errorMessage:""}))
        }

    }

    const createPlaylistHandler = () => {

        if (playlistName.length < 1) {
            setIsError( (prev) => ({...prev,errorState:true , errorMessage:"Playlist name cannot be empty"}));
        }
        else if (playlistName.length > 5) {
            setIsError({errorState:true , errorMessage:"Playlist name must be less than 50 characters"});
        }
        else 
        setShowModal(false);

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
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>

                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                            <p> No playlist to show yet...</p>
                        </div>

                        <div className="playlist-input">

                            <input type="text" placeholder="Create a new Playlist" onChange={playlistNameHandler} value={playlistName} style={ isError.errorState === true ? { border: "2px solid red"} : null}/>
                        </div>
                        <p className="error-message modal-error-message" style={ isError.errorState === true ? { display: "block"} : { display: "none"}}>{isError.errorMessage}</p>

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
