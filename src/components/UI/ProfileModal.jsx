import "../../index.css";
import ReactModal from 'react-modal';
import EditProfileModal from './EditProfileModal';
import { useEditProfile} from '../hooks/useModal';
import PropTypes from 'prop-types';
import { useBlur } from "../hooks/useBlur";
import { X } from "lucide-react";
import { ModalButtons } from "./ModalButtons";
import { CardProfile } from "./CardProfile";
import { CardTasks } from "./CardTasks";


const ProfileModal = ({ isOpen, onClose, img, name, lastName1, lastName2, mail, usr, taskCompleted, taskRemaining, courses }) => {
    const { editModalIsOpen,  closeEditModal, handleEditProfileClick } = useEditProfile();
    
    
    useBlur(isOpen);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0 "
            
        >
            <span className="fixed inset-0 bg-black bg-opacity-70" onClick={()=>{onClose();}}></span>
            <div className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[28rem] p-8">
                <button onClick={onClose}>
                    <X className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
                </button>
                <CardProfile img={img} name={name} lastName1={lastName1} lastName2={lastName2} mail={mail} usr={usr} taskCompleted={taskCompleted} taskRemaining={taskRemaining} courses={courses} />
                <CardTasks taskCompleted={taskCompleted} completedText={"Task Completed"} taskRemaining={taskRemaining}   remainingText={"Task Remaining"}  courses={courses} coursesText={"Courses"} />
                <div className='justify-center flex mt-8 '>
                    <ModalButtons onClick={() => { handleEditProfileClick(); }} text="Edit Profile"/>
                </div>
            </div>
            <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal} profileInfo={{img, name, lastName1, lastName2, mail, usr}}/>
        </ReactModal>
    );
};


ProfileModal.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastName1: PropTypes.string.isRequired,
    lastName2: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    usr: PropTypes.string.isRequired,
    taskCompleted: PropTypes.number.isRequired,
    taskRemaining: PropTypes.number.isRequired,
    courses: PropTypes.string.isRequired
};

ProfileModal.defaultProps = {
    img: "/imgs/usr-default.png",
    name: "Juan Solis",
    mail: "juanvasquez@gmail.com",
    usr: "juanca78",
    taskCompleted: 5,
    taskRemaining: 35,
    courses: "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
}

export default ProfileModal;
