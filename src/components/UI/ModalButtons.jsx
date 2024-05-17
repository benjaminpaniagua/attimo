import "../../index.css";

export function ModalButtons({ onClick, text }) {
    return (
        <div className='w-full text-center dark:text-clr-dark-blue dark:bg-clr-white font-medium text-fs-med text-clr-dark-blue bg-clr-light-secondary-bg hover:bg-indigo-300/70 rounded-lg my-5 p-5 items-center'>
            <button onClick={onClick}>{text}</button>
        </div>  
    );
}