import React from 'react';
import ReactModal from 'react-modal';
import { SignInputs } from "../UI/SignInputs.jsx";
import useLogin from '../hooks/useLogin.js';

const EditProfileModal = ({ isOpen, onClose }) => {
    useLogin();
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
                 <div className="bg-white dark:bg-clr-dark-bg p-8 rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[31rem] z-[101] p-4">
            <button onClick={handleClose} className="w-5">
                <img src="/imgs/flecha-izquierda.png" alt="close" />
            </button>
            <div className='grid justify-center text-center'>
                <h2 className='mb-4 dark:text-clr-white'>Edit Profile</h2>
                <p className='mb-4 dark:text-clr-mint-green'>Profile Picture</p>
                <input type="file" accept="image/*" id="fileInput" className="hidden"/> 
                <label htmlFor="fileInput" className="block w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-4"></label>
            </div>
            <div className='grid gap-3'>
                <SignInputs type="text" name="First Name" />
                <SignInputs type="text" name="Last Name" />
                <SignInputs type="email" name="Email" />
                <SignInputs type="password" name="Username" />
            </div>
            <div className='justify-center flex mt-8'>
                <button onClick={handleClose} className='w-full dark:text-clr-dark-blue dark:bg-clr-white  font-medium text-fs-med text-white bg-clr-dark-blue rounded-lg mb-4 p-5'>Confirm</button>
            </div>
        </div>
        </ReactModal>
    );
};

export default EditProfileModal;