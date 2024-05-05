import "../../index.css";
import ReactModal from 'react-modal';
import EditProfileModal from './EditProfileModal';
import { useEditProfile} from '../hooks/useModal';
import PropTypes from 'prop-types';

const ProfileModal = ({ isOpen, onClose, img, name, mail, usr, taskCompleted, taskRemaining, courses }) => {
    const { editModalIsOpen, handleEditProfileClick, closeEditModal } = useEditProfile();


    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0"
        >
        <div className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[31rem]">
            <button className='m-8' onClick={onClose}>
                <img src="/imgs/x.png" alt="close" className='w-5'/>
            </button>
        <div className='text-center'>
                <img src={img} className='w-48 mx-auto mb-4' alt="" />
                <h2 className="mb-1 dark:text-clr-white">{name}</h2>
                <p className="mb-1 dark:text-clr-white">{mail}</p>
                <p className="mb-4 dark:text-clr-white">@{usr}</p>
                <hr className='w-96 bg-clr-blue dark:bg-clr-white h-1 mx-auto mb-4'/>
            <div className='flex mb-4'>
                <div className="flex-1 pr-4 relative">
                    <h2 className="dark:text-clr-mint-green">{taskCompleted}</h2>
                    <p className="dark:text-clr-light-gray">Task Completed</p>
                    <div className="absolute inset-y-0 right-0 w-[0.2rem] bg-clr-blue dark:bg-clr-white "></div>
                </div>
                <div className="flex-1">
                    <h2 className="dark:text-clr-mint-green">{taskRemaining}</h2>
                    <p className="dark:text-clr-light-gray">Remaining Tasks</p>
                </div>
            </div>
            <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white'/>
            <div className='grid grid-cols-1 mb-4'>
                <div>
                    <h2 className="dark:text-clr-mint-green">Courses</h2>
                    <p className='mb-4 dark:text-clr-light-gray'>{courses}</p>               
                </div>
                <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white'/>
                <div className='justify-center flex mt-8'>
                    <button onClick={handleEditProfileClick} className='dark:text-clr-dark-blue dark:bg-clr-white font-medium text-fs-med text-white w-40 bg-clr-dark-blue rounded-lg my-5 '>Edit Profile</button>
                </div>
            </div>
        </div>
    </div>
            <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal} />
        </ReactModal>
    );
};

ProfileModal.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    usr: PropTypes.string.isRequired,
    taskCompleted: PropTypes.string.isRequired,
    taskRemaining: PropTypes.string.isRequired,
    courses: PropTypes.string.isRequired
};

ProfileModal.defaultProps = {
    img: "/imgs/usr-default.png",
    name: "Juan Solis",
    mail: "juanvasquez@gmail.com",
    usr: "juanca78",
    taskCompleted: "5",
    taskRemaining:"35",
    courses: "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
}

export default ProfileModal;
