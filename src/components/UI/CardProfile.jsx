import "../../index.css";


export function CardProfile({img, name, lastName1, lastName2, mail, usr}) {

    return(
        <div className='text-center'>
        <div className="grid gap-3">
            <img src={img} className='w-48 mx-auto rounded-full' alt="profile photo" />
            <section className="mb-4">
                <h3 className="dark:text-clr-white">{name} {lastName1} {lastName2}</h3>
                <p className="dark:text-clr-white">{mail}</p>
                <p className="dark:text-clr-white">@{usr}</p>
            </section>
        </div>       
    </div>
    )
}