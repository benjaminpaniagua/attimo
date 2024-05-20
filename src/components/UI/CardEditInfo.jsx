import "../../index.css";

export function CardEditInfo({title,img}) {



return(
    <>
        <div className='grid justify-center text-center'>
                <h2 className='mb-4 dark:text-clr-white'>{title}</h2>
            <div className='relative'>
                <img src={img} className='w-48 mx-auto rounded-full' alt="profile photo" />
            </div>
        </div>
    </>
)


}