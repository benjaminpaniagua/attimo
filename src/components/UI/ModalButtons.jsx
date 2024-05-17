import "../../index.css";

export function ModalButtons({ onClick }) {
    return (
        <div className='w-full dark:text-clr-dark-blue dark:bg-clr-white font-medium text-fs-med text-clr-dark-blue bg-clr-light-secondary-bg hover:bg-indigo-300/70 rounded-lg my-5 p-5'>
            <button onClick={onClick}>Edit Profile</button>
        </div>  
    );
}