import React from 'react';
import ReactModal from 'react-modal';
import { SignInputs } from "../UI/SignInputs.jsx";

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
                    <div className='grid justify-center'>
                        <h2 className="fs-large font-semibold text-center mb-4">Edit Profile</h2>
                            <input type="file" accept="image/*" id="fileInput" class="hidden"/> 
                            <label for="fileInput" className=" block w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-4"> </label>
                    </div>
                    <div>
                        <SignInputs type="text" name="First Name" />
                        <SignInputs type="text" name="Last Name" />
                        <SignInputs type="email" name="Email" />
                        <SignInputs type="password" name="Username" />
                    </div>
                    <div className='justify-center flex mt-8'>
                        <button onClick={handleClose} className=' font-medium text-fs-med text-white w-40 bg-clr-dark-blue rounded-lg mb-12'>Confirm</button>
                    </div>
            </div>
        </ReactModal>
    );
};

export default EditProfileModal;