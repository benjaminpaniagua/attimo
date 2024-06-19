import {CardProfile} from "../../components/UI/CardProfile"
import {CardTasks} from "../../components/UI/CardTasks"
import { useEditProfile} from '../hooks/useModal';
import { ModalButtons } from "../../components/UI/ModalButtons";
import EditProfileModal from "./EditProfileContent";
import PropTypes from "prop-types";

export function ProfileContent({image, name, lastname1, lastname2, email, username, taskCompleted, taskRemaining, courses}){
    const { editModalIsOpen,  closeEditModal, handleEditProfileClick } = useEditProfile();

    return (
        <>
        <div>
            <CardProfile
                image={image}
                name={name}
                lastname1={lastname1}
                lastname2={lastname2}
                email={email}
                username={username}
            />   
            <CardTasks
                taskCompleted={taskCompleted}
                taskRemaining={taskRemaining}
                courses={courses}
            />
            <div className='justify-center flex'>
                <ModalButtons onClick={() => { handleEditProfileClick(); }} text="Edit Profile"/>
            </div>
                <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal} profileInfo={{image, name, lastname1, lastname2, email, username}}/>
        </div>
        
        </>
    );
}
