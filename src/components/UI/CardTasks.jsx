import "../../index.css";
import PropTypes from "prop-types";


export function CardTasks({taskCompleted, completedText,  taskRemaining,  remainingText,coursesText,courses,}) {


    return(
        <>
        <div className="text-center">
        <hr className='w-96 bg-clr-blue dark:bg-clr-white h-1 mx-auto mb-4' />
        <div className='flex mb-4'>
            <div className="flex-1 pr-4 relative">
                <h3 className="dark:text-clr-mint-green">{taskCompleted}</h3>
                <p className="dark:text-clr-light-gray">{completedText}</p>
                <div className="absolute inset-y-0 right-0 w-[0.2rem] bg-clr-blue dark:bg-clr-white "></div>
            </div>
            <div className="flex-1">
                <h3 className="dark:text-clr-mint-green">{taskRemaining}</h3>
                <p className="dark:text-clr-light-gray">{remainingText}</p>
            </div>
        </div>
        <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white' />
        <div className='grid grid-cols-1 mb-4'>
            <div>
                <h3 className="dark:text-clr-mint-green">{coursesText}</h3>
                
            </div>
            <hr className='w-96 bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white' />
        </div>
    </div>
        </>
    )



}


