    import { useState } from 'react';

    export function useEditProfile() {
        const [editModalIsOpen, setEditModalIsOpen] = useState(false);

        const openEditModal = () => {
            setEditModalIsOpen(true);
        };

        const closeEditModal = () => {
            setEditModalIsOpen(false);
        };

        const handleEditProfileClick = () => {
            openEditModal();
        };

        return { editModalIsOpen, openEditModal, closeEditModal, handleEditProfileClick };
    }






