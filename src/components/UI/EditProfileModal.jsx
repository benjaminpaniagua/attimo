import React from 'react';
import ReactModal from 'react-modal';
import useLogin from '../hooks/useLogin.js';
import { ChevronLeft } from "lucide-react";
import { SignInputs } from "./SignInputs.jsx"
import { ModalButtons } from "./ModalButtons";
import { CardEditInfo } from './CardEditInfo.jsx';

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
        <span className="fixed inset-0 bg-black bg-opacity-[0.01]" onClick={onClose}></span>    
        <div className=" bg-clr-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[28rem] p-8">
            <button onClick={handleClose}>
                <ChevronLeft className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
            </button>
                <CardEditInfo title="Edit Profile" img={profileInfo.img} />
            <div className='grid gap-3 mt-4'>
                <SignInputs type="text" name="First Name" isActive={true} defaultValue={profileInfo.name} />
                <SignInputs type="text" name="Last Names" isActive={true} defaultValue={`${profileInfo.lastName1} ${profileInfo.lastName2}`}/>
                <SignInputs type="email" name="Email" isActive={true} defaultValue={profileInfo.mail} />
                <SignInputs type="text" name="Username" isActive={true} defaultValue={profileInfo.usr} />
            </div>
            <div className='justify-center flex mt-8'>
                <ModalButtons onClick={handleClose} text="Confirm" />
            </div>
        </div>
        </ReactModal>
    );
};

export default EditProfileModal;