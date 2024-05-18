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
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-clr-dark-bg rounded-md shadow-lg p-8 relative w-[50rem] md:w-[25rem] grid gap-6">
          <div className="flex justify-between">
            <h2>{title}</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="grid gap-4">
            {children}
          </div>
        </div>
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
