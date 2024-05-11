import '../../index.css'
import PropTypes from 'prop-types';
import * as React from 'react';
import LinearWithValueLabel from './ProgressBar'; 
export function CardCourses({title, description, image, progress}) {
    return(
        <div className="bg-white dark:bg-clr-dark-third rounded-lg overflow-hidden">
            <div className='h-40 overflow-hidden'><img className="w-full bg-cover" src={`${image}`} alt="Courses Image" /></div>
            <section className="mt-2 p-5">
                <h3 className='dark:text-white'>{title}</h3>
                <p className="my-3 dark:text-clr-light-gray">{description}</p>
                <div>
                    <div className='flex justify-between mb-2'>
                        <p className="dark:text-clr-light-gray">Progress</p>
                        <p className='text-clr-dark-green dark:text-clr-mint-green'>{progress}%</p>
                    </div>
                    <LinearWithValueLabel value={progress} />
                </div>
            </section>
        </div>
    );
}
// Set required props
CardCourses.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
}

CardCourses.defaultProps = {
    title: "Course Title",
    description: "Description",
    image: "https://images.unsplash.com/photo-1622834085294-0b1a1c7f2f0e",
    progress: 56
}

