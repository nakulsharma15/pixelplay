import React from "react";
import "./Styles/Modal.css";

const Modal = ({ setShowModal }) => {

    return (
        <>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header">
                            <p>Save to...</p>
                        </div>
                       
                        <div className="playlist-container">
                            No playlist to show yet...
                        </div>

                        <div className="modal-actions">

                            <div className="actions-container">
                                <button
                                    className="modal-action-btn create-btn"
                                    onClick={() => setShowModal(false)}
                                >
                                    Create
                                </button>
                                <button
                                    className="modal-action-btn close-btn"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
