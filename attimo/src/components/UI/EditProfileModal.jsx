import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

const EditProfileModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState(''); // Estado para almacenar el nombre editado

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        // Aquí puedes enviar el nuevo nombre al servidor o realizar cualquier acción necesaria
        console.log("Nuevo nombre:", name);
        onClose(); // Cierra el modal de edición
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0"
        >
            <div className="bg-white p-8 rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[30rem]">
                    <button onClick={handleSubmit} className="w-5">
                        <img src="/imgs/flecha-izquierda.png" alt="close" />
                    </button>
                <h2 className="fs-large font-semibold text-center mb-1">Edit Profile</h2>
                <label className="block mb-2">
                    New Name:
                    <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2 mt-1"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
            </div>
        </ReactModal>
    );
};

export default EditProfileModal;