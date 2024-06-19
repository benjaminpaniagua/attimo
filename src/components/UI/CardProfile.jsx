import "../../index.css";
import defaultImage from '../../assets/imgs/image_card.png';
import PropTypes from "prop-types";

export function CardProfile({image, name, lastname1, lastname2, email, username}) {

    return(
        <div className='text-center'>
        <div className="grid gap-3">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img src={image} className='object-cover w-full h-full' alt="profile photo" />
            </div>
            <section className="mb-4">
                <h3 className="dark:text-clr-white">{name} {lastname1} {lastname2}</h3>
                <p className="dark:text-clr-white">{email}</p>
                <p className="dark:text-clr-white">@{username}</p>
            </section>
        </div>       
    </div>
    )
}

CardProfile.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastname1: PropTypes.string.isRequired,
    lastname2: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

CardProfile.defaultProps = {
    image: defaultImage,
    name: "Name",
    lastname1: "Lastname1",
    lastname2: "Lastname2",
    email: "example@gmail.com",
    username: "username"
}