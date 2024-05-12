import '../../index.css'
import PropTypes from 'prop-types';

export function CardEvents({title, description, date, hour, image, category, label, status, percent}) {
    return(
        <div className="bg-white dark:bg-clr-dark-third rounded-lg overflow-hidden">
            <div className='h-40 overflow-hidden'><img className="w-full bg-cover" src={`${image}`} alt="Courses Image" /></div>
            <div className="p-4">
                <section className='flex justify-between'>
                    <h3 className='dark:text-white'>{title}</h3>
                    {percent ? <h3 className='dark:text-white'>{percent}%</h3> : null}
                </section>
                <p className="dark:text-clr-light-gray my-3">{description}</p>
                <p className="dark:text-clr-light-gray my-3">{date}, {hour}</p>
                <div className='flex gap-4'>
                    <span className='px-4 py-2 rounded-md bg-clr-light-green text-clr-dark-green dark:bg-clr-dark-green dark:text-clr-light-green'>{category}</span>
                    <span className='px-4 py-2 rounded-md bg-clr-light-pink text-clr-dark-pink dark:bg-clr-dark-pink dark:text-clr-light-pink'>{label}</span>
                    <span className='px-4 py-2 rounded-md bg-clr-light-bg text-clr-dark-gray dark:bg-clr-dark-gray dark:text-clr-light-bg'>{status}</span>
                </div>
            </div>
        </div>
    )
}

// Set required props
CardEvents.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
}

CardEvents.defaultProps = {
    title: "Event's Title",
    description: "Event's description",
    date: "10 May",
    hour: "8:00",
    image: "https://images.unsplash.com/photo-1622834085294-0b1a1c7f2f0e",
    category: "University",
    label: "Event",
    percent: 0,
    status: "Active"
}

