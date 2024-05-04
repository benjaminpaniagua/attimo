import React, { useState } from 'react';
import ReactModal from 'react-modal';
import EditProfileModal from './EditProfileModal';
import PropTypes from 'prop-types';

const ProfileModal = ({ isOpen, onClose, name, mail, usr, taskCompleted, taskRemaining, courses }) => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    const handleEditProfileClick = () => {
        setEditModalIsOpen(true);
    };

    const handleCloseEditModal = () => {
        setEditModalIsOpen(false);
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0"
        >
            <div className="bg-white p-8 rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[30rem]">
                <button onClick={onClose}>
                    <img src="/imgs/x.png" alt="close" className='w-5'/>
                </button>
                <img src="/imgs/usr-default.png" className='w-48 mx-auto mb-4' alt="" />
                <h2 className="fs-large font-semibold text-center mb-1">{name}</h2>
                <p className="fs-normal text-center font-medium">{mail}</p>
                <p className="fs-normal text-center font-medium mb-4">@{usr}</p>
                <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4'/>
                <div className='flex mb-4'>
                    <div className="flex-1 pr-4 relative">
                        <h2 className='text-fs-large text-center font-medium'>{taskCompleted}</h2>
                        <p className='fs-normal text-center font-light'>Task Completed</p>
                        <div className="absolute inset-y-0 right-0 w-[0.2rem] bg-clr-blue"></div>
                    </div>
                    <div className="flex-1">
                        <h2 className='text-fs-large text-center font-medium'>{taskRemaining}</h2>
                        <p className='fs-normal text-center font-light'>Remaining Tasks</p>
                    </div>
                </div>
                <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4'/>
                <div className='grid grid-cols-1 mb-4'>
                    <div>
                        <h2 className='text-fs-large text-center font-medium'>Courses</h2>
                        <p className='fs-normal text-center font-light mb-4'>{courses}</p>               
                    </div>
                    <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4'/>
                    <div className='justify-center flex mt-8'>
                        <button onClick={handleEditProfileClick} className=' font-medium text-fs-med text-white w-40 bg-clr-dark-blue rounded-lg '>Edit Profile</button>
                    </div>
                </div>
            </div>
            <EditProfileModal isOpen={editModalIsOpen} onClose={handleCloseEditModal} />
        </ReactModal>
    );
};

ProfileModal.propTypes = {
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    usr: PropTypes.string.isRequired,
    taskCompleted: PropTypes.string.isRequired,
    taskRemaining: PropTypes.string.isRequired,
    courses: PropTypes.string.isRequired
};

ProfileModal.defaultProps = {
    name: "Juan Solis",
    mail: "juanvasquez@gmail.com",
    usr: "juanca78",
    taskCompleted: "5",
    taskRemaining:"35",
    courses: "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
}

export default ProfileModal;
