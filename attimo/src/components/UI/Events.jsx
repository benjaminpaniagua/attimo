import "../../index.css";
import PropTypes from 'prop-types';

export function Events({ items }){
    return (
        <div className=" container grid grid-cols-3 pt-10 m-auto gap-5 grid-rows-2 my-5">
            {items.map(item => (
                <section key={item.id} className="bg-white rounded-lg">
                    <img className="rounded-t-lg w-full" src={item.image} alt="Event"/>
                    <div className="flex justify-between mb-2.5">
                        <h3 className="pl-5 pt-5 fc-main ff-main fw-md text-xl leading-none">{item.title}</h3>
                        <h3 className="pr-5 pt-5 justify-end fc-main fw-md text-xl leading-none">{item.percentage}</h3>
                    </div>
                    <p className="pl-5 pr-5 mb-2.5 fc-secondary fw-light text-base leading-none">{item.description}</p>
                    <p className="pl-5 mb-2.5 fc-secondary fw-light text-base leading-none">{item.dateHour}</p>
                    <button className="btn-green-white ml-5 rounded-md w-36 h-8 mb-5 fw-light text-base leading-none">{item.btn1}</button>
                    <button className="btn-pink-white ml-5 rounded-md w-36 h-8 mb-5 fw-light text-base leading-none">{item.btn2}</button>
                </section>
            ))}
        </div>
    );;
}

Events.propTypes = {
    title: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateHour:PropTypes.string.isRequired,
    btn1:PropTypes.string.isRequired,
    btn2:PropTypes.string.isRequired,
}

Events.defaultProps = {
    title: "title",
    percentage: "percentage",
    description: "description",
    dateHour: "10 May, 10:00 AM",
    btn1:"Course",
    btn2:"Homework",
}

