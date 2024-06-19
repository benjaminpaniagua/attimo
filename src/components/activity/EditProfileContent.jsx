import React, { useState } from "react";
import ReactModal from 'react-modal';
import { ChevronLeft, Pencil } from "lucide-react";
import useLogin from '../hooks/useLogin.js';
import { SignInputs } from '../UI/SignInputs.jsx';
import { ModalButtons } from '../UI/ModalButtons.jsx';
import PropTypes from "prop-types";
import defaultImage from '../../assets/imgs/image_card.png';

const EditProfileModal = ({ isOpen, onClose, profileInfo }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    useLogin();
    const [error, setError] = useState(null);

    const handleClose = () => {
        onClose();
    };

    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch(`http://attimobackend.test/api/user/edit/${user.id}`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User updated successfully:', result);
                onClose(); // Cerrar modal después de actualizar exitosamente
            } else {
                const errorData = await response.text(); // Leer el texto de la respuesta en caso de error
                console.error('Error updating user:', errorData);
                setError('Error updating user. Please try again.'); // Manejar el error en el estado
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Fetch error. Please check your network connection.');
        }
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0"
        >
            <button className="fixed inset-0 bg-black bg-opacity-[0.01]" onClick={onClose}></button>
            <form onSubmit={handleUpdateProfile} encType="multipart/form-data" className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[28rem] md:w-[26rem] xs:w-[24.3rem] p-8">
                <button onClick={handleClose}>
                    <ChevronLeft className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
                </button>
                <div className='grid justify-center text-center gap-4'>
                    <h2 className='dark:text-white'>Edit profile</h2>
                    <div className="relative group w-48 mx-auto mt">
                        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                            <img src={user.image || defaultImage} className='object-cover w-full h-full' alt="profile photo" />
                        </div>
                        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="bg-gray-500 opacity-50 rounded-full w-full h-full flex items-center justify-center">
                                <input type="file" accept=".jpg, .jpeg, .png, .webp" className="w-full cursor-pointer h-full opacity-0 absolute" />
                                <Pencil className="text-white" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='grid gap-3'>
                    <SignInputs type="text" name="name" isActive={true} defaultValue={user.name} />
                    <SignInputs type="text" name="lastname1" isActive={true} defaultValue={user.lastname1} />
                    <SignInputs type="text" name="lastname2" isActive={true} defaultValue={user.lastname2} />
                    <SignInputs type="text" name="username" isActive={true} defaultValue={user.username} />
                    <SignInputs type="email" name="email" isActive={true} defaultValue={user.email} />
                </div>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>} 
                <div className='justify-center flex'>
                    <ModalButtons type="submit" text="Update" />
                </div>
            </form>
        </ReactModal>
    );
};

EditProfileModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    profileInfo: PropTypes.object.isRequired,
};

EditProfileModal.defaultProps = {
    profileInfo: {
        img: defaultImage,
        name: "Pedro",
        lastName1: "Rojas",
        lastName2: "García",
        mail: "pedrorojas@gmail.com",
        usr: "pedrito12"
    }
};

export default EditProfileModal;
