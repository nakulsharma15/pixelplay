import React from "react";
import styles from "./Styles/Modal.module.css";

const Modal = ({ setShowModal }) => {

    return (
        <>
            <div className={styles.darkBG} onClick={() => setShowModal(false)}>
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Dialog</h5>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
                            <span>band</span>
                        </button>
                        <div className={styles.modalContent}>
                            Are you sure you want to delete the item?
                        </div>
                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>
                                <button
                                    className={styles.deleteBtn}
                                    onClick={() => setShowModal(false)}
                                >
                                    Delete
                                </button>
                                <button
                                    className={styles.cancelBtn}
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
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
