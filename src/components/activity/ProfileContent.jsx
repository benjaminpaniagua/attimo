import {CardProfile} from "../../components/UI/CardProfile"
import {CardTasks} from "../../components/UI/CardTasks"
import { useEditProfile} from '../hooks/useModal';
import { ModalButtons } from "../../components/UI/ModalButtons";
import EditProfileModal from "./EditProfileContent";
import PropTypes from "prop-types";

export function ProfileContent(){
    const user = JSON.parse(localStorage.getItem("user"));
    const { editModalIsOpen,  closeEditModal, handleEditProfileClick } = useEditProfile();

    return (
        <>
        <div>
            <CardProfile
                image={user.image}
                name={user.name}
                lastname1={user.lastname1}
                lastname2={user.lastname2}
                email={user.email}
                username={user.username}
            />   
            <CardTasks
                taskCompleted={1}
                taskRemaining={1}
                // courses={courses}
            />
            <div className='justify-center flex'>
                <ModalButtons onClick={() => { handleEditProfileClick(); }} text="Edit Profile"/>
            </div>
            <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal}/>
        </div>
        </>
    );
}
