import React from 'react';
import ReactModal from 'react-modal';

const EditProfileModal = ({ isOpen, onClose }) => {



    const handleClose = () => {
        onClose();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0"
        >
            <div className="bg-white p-8 rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[30rem]">
                    <button onClick={handleClose} className="w-5">
                        <img src="/imgs/flecha-izquierda.png" alt="close" />
                    </button>
                <h2 className="fs-large font-semibold text-center mb-1">Edit Profile</h2>
                
            </div>
        </ReactModal>
    );
};

export default EditProfileModal;