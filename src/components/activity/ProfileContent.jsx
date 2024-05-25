import {CardProfile} from "../../components/UI/CardProfile"
import {CardTasks} from "../../components/UI/CardTasks"
import { useEditProfile} from '../hooks/useModal';
import { ModalButtons } from "../../components/UI/ModalButtons";
import EditProfileModal from "./EditProfileContent";


export function ProfileContent({img, name, lastName1, lastName2, mail, usr, taskCompleted, taskRemaining, courses}){
    const { editModalIsOpen,  closeEditModal, handleEditProfileClick } = useEditProfile();

    return (
        <>
        <div>
            <CardProfile
                img={img}
                name={name}
                lastName1={lastName1}
                lastName2={lastName2}
                mail={mail}
                usr={usr}
            />   
            <CardTasks
                taskCompleted={taskCompleted}
                taskRemaining={taskRemaining}
                courses={courses}
            />
            <div className='justify-center flex'>
                <ModalButtons onClick={() => { handleEditProfileClick(); }} text="Edit Profile"/>
            </div>
                <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal} profileInfo={{img, name, lastName1, lastName2, mail, usr}}/>
        </div>
        
        </>
    );
}