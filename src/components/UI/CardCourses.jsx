import '../../index.css'
import PropTypes from 'prop-types';
import defaultImage from '../../assets/imgs/image_card.png';
import LinearWithValueLabel from './ProgressBar'; 

export function CardCourses({title, description, image, progress}) {
    return(
        <div className="bg-white dark:bg-clr-dark-third rounded-lg overflow-hidden dark:hover:brightness-125 hover:brightness-[.80] transition duration-300 cursor-pointer">
            <div className='h-40 overflow-hidden'><img className="w-full bg-cover" src={`${image}`} alt="Courses Image" /></div>
            <section className="mt-2 p-5">
                <h3 className='dark:text-white'>{title}</h3>
                <p className="my-3 dark:text-clr-light-gray">{description}</p>
                <div>
                    <div className='flex justify-between mb-2'>
                        <p className="dark:text-clr-light-gray">Progress</p>
                        <p className='text-clr-blue dark:text-clr-light-bg'>{progress}%</p>
                    </div>
                    <LinearWithValueLabel value={progress} />
                </div>
            </section>
        </div>
    );
}

CardCourses.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
}

CardCourses.defaultProps = {
    title: "Programming",
    description: "Learn the basics of java programming language and start coding your first program.",
    image: defaultImage,
    progress: 56
}

