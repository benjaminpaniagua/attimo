import "../../index.css";

export function CardEditInfo({title,img}) {

    return(
        <>
            <div className='grid justify-center text-center'>
                <h2 className='mb-4 dark:text-clr-white'>{title}</h2>
                <div className="relative group w-48 mx-auto">
                    <img src={img} className="w-full rounded-full" alt="profile photo" />
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="bg-gray-500 opacity-50 rounded-full w-full h-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            className="lucide lucide-pencil w-6 h-6 text-white opacity-100">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}