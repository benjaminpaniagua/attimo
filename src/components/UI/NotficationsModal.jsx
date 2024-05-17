import "../../index.css";
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { useBlur } from "../hooks/useBlur";


const NotificationsModal = ({ isOpen, onClose}) => {
    useBlur(isOpen);
    return (
      <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0"
      >
        {/* Fondo con opacidad */}
        <div className="fixed inset-0 z-[] bg-black bg-opacity-50"></div>
        {/* Contenido del modal */}
        <div className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg p-16 relative">
          <h2>Hola Mundo</h2>
          <button onClick={onClose}>Cerrar Modal</button>
        </div>
      </ReactModal>
    );
  };
 export default NotificationsModal; 


    

