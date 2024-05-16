import React from 'react';
import ReactModal from 'react-modal';
import { SignInputs } from "../UI/SignInputs.jsx";
import useLogin from '../hooks/useLogin.js';
import { ChevronLeft } from "lucide-react";

const EditProfileModal = ({ isOpen, onClose, profileInfo }) => {
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
        <div className="bg-clr-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[31rem] z-[101] p-8">
            <button onClick={handleClose}>
                <ChevronLeft className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
            </button>
            <div className='grid justify-center text-center'>
                <h2 className='mb-4 dark:text-clr-white'>Edit profile</h2>
                <div className='relative'>
                    <img src={profileInfo.img} className='w-48 mx-auto rounded-full' alt="profile photo" />
                </div>
            </div>
            <div className='grid gap-3 mt-4'>
                <SignInputs type="text" name="First Name" defaultValue={profileInfo.name} />
                <SignInputs type="text" name="Last Names" defaultValue={`${profileInfo.lastName1} ${profileInfo.lastName2}`} />
                <SignInputs type="email" name="Email" defaultValue={profileInfo.mail} />
                <SignInputs type="password" name="Username" defaultValue={profileInfo.usr} />
            </div>
            <div className='justify-center flex mt-8'>
                <button onClick={handleClose} className='w-full dark:text-clr-dark-blue dark:bg-clr-white  font-medium text-fs-med text-white w-40 bg-clr-dark-blue rounded-lg mb-4 p-5'>Confirm</button>
            </div>
        </div>
        </ReactModal>
    );
};

export default EditProfileModal;