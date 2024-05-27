import "../../index.css";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { useBlur } from "../hooks/useBlur";
import { X } from "lucide-react";

const GenericModal = ({ isOpen, onClose, children, title }) => {
  useBlur(isOpen);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <button
        className="fixed inset-0 bg-black bg-opacity-20"
        onClick={onClose}
      ></button>
      <div className="bg-white dark:bg-clr-dark-bg rounded-md p-6 relative flex flex-col gap-6 min-h-[36rem] min-w-[30rem]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold dark:text-clr-white">{title}</h2>
          <button onClick={onClose} className="focus:outline-none">
            <X size={24} className='w-10 text-clr-dark-gray dark:text-clr-light-gray'/>
          </button>
        </div>
        <div className="grid gap-4">{children}</div>
      </div>
    </ReactModal>
  );
};

GenericModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default GenericModal;