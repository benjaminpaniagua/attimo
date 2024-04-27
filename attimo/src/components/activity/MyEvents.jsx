import "../../index.css";
import PropTypes from 'prop-types';
import  {Search}  from "./Search.jsx";

export function MyEvents({ items }){
    return (
        <div className="grid grid-cols-3 pt-10 gap-5 grid-rows-2">
            {items.map(item => (
                <section key={item.id} className="bg-white rounded-lg">
                    <img className="rounded-t-lg w-full" src={item.image} alt="Event"/>
                    <div className="p-5">   
                        <div className="flex justify-between">
                            <h3 className=" fc-main fw-md text-xl leading-none">{item.title}</h3>
                            <h3 className=" justify-end fc-main fw-md text-xl leading-none">{item.percentage}</h3>
                        </div>
                        <div className="mt-3">
                            <p className=" fc-secondary fw-light text-base leading-none">{item.description}</p>
                        </div>
                        <div className="mt-2.5">
                            <p className=" fc-secondary fw-light text-base leading-none">{item.dateHour}</p>
                        </div>
                        <div className="mt-5 flex gap-4"> 
                            <label className=" flex bg-clr-light-green text-clr-dark-green rounded-md w-36 h-8 fw-light text-base leading-none justify-center items-center" htmlFor=""> {item.btn1}</label>  
                            <label className="flex bg-clr-light-pink text-clr-dark-pink rounded-md w-36 h-8 fw-light text-base leading-none justify-center items-center" htmlFor="">{item.btn2}</label> 
                        </div>         
                    </div>
                </section>
            ))}
        </div>
    );
}

MyEvents.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dateHour: PropTypes.string.isRequired,
        btn1: PropTypes.string.isRequired,
        btn2: PropTypes.string.isRequired,
    })).isRequired,
};

MyEvents.defaultProps = {
    image:"https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png",
    title: "title",
    percentage: "percentage",
    description: "description",
    dateHour: "10 May, 10:00 AM",
    btn1:"Course",
    btn2:"Homework",
}

