import ReactModal from 'react-modal';
import useLogin from '../hooks/useLogin.js';
import { ChevronLeft } from "lucide-react";
import { SignInputs } from '../UI/SignInputs.jsx';
import { ModalButtons } from '../UI/ModalButtons.jsx';
import { CardEditInfo } from '../UI/CardEditInfo.jsx';
import PropTypes from "prop-types";
import defaultImage from '../../assets/imgs/image_card.png';

const EditProfileModal = ({ isOpen, onClose, profileInfo }) => {
    useLogin();

    const handleClose = () => {
        onClose();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center"
            overlayClassName="fixed inset-0" 
        >
        <button className="fixed inset-0 bg-black bg-opacity-[0.01]" onClick={onClose}></button>    
        <div className=" bg-clr-white dark:bg-clr-dark-bg rounded-md shadow-lg absolute left-[5.5rem] bottom-[0rem] w-[28rem] md:w-[26rem] xs:w-[24.3rem] p-8">
            <button onClick={handleClose}>
                <ChevronLeft className='w-10 text-clr-dark-gray dark:text-clr-light-gray' />
            </button>
            
                <CardEditInfo title="Edit Profile" img={profileInfo.img} />
            <div className='grid gap-3 mt-12'>
                <SignInputs type="text" name="First Name" isActive={true} defaultValue={profileInfo.name}/>
                <SignInputs type="text" name="Last Names" isActive={true} defaultValue={`${profileInfo.lastName1} ${profileInfo.lastName2}`}/>
                <SignInputs type="text" name="Username" isActive={true} defaultValue={profileInfo.usr}/>
                <SignInputs type="email" name="Email" isActive={true} defaultValue={profileInfo.mail}/>
            </div>
            <div className='justify-center flex'>
                <ModalButtons onClick={handleClose} text="Update" />
            </div>
        </div>
        </ReactModal>
    );
};

EditProfileModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    profileInfo: PropTypes.object.isRequired,
}

EditProfileModal.defaultProps = {
    profileInfo: {
        img: defaultImage,
        name: "Pedro",
        lastName1: "Rojas",
        lastName2: "García",
        mail: "pedrorojas@gmail.com",
        usr: "pedrito12"
    }
}


export default EditProfileModal;