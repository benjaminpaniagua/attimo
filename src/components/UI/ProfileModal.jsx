import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { useBlur } from "../hooks/useBlur";
import { X } from 'lucide-react';

const ProfileModal = ({ isOpen, onClose, children }) => {
    useBlur(isOpen);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0 "
        >
            <button className="fixed inset-0 bg-black dark:bg-opacity-40 bg-opacity-20" onClick={onClose}></button>
            <div className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[28rem] md:w-[26rem] xs:w-[24.3rem] p-8">
                <button onClick={onClose}>
                    <X className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
                </button>
                {children} 
            </div>
        </ReactModal>
    );
};

ProfileModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired, 
};

export default ProfileModal;