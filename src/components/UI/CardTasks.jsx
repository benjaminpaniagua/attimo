import "../../index.css";
import PropTypes from "prop-types";
import { EmptyState } from "./EmptyState.jsx";
import { LibraryBig } from "lucide-react";

export function CardTasks({ taskCompleted, taskRemaining, courses }) {
    return (
        <div className="text-center">
            <hr className='w-full bg-clr-blue dark:bg-clr-white h-1 mx-auto mb-4' />
            <div className='flex mb-4'>
                <section className="flex-1 pr-4 relative">
                    <h3 className="dark:text-clr-mint-green">{taskCompleted}</h3>
                    <p className="dark:text-clr-light-gray">Task completed</p>
                    <div className="absolute inset-y-0 right-0 w-[0.2rem] bg-clr-blue dark:bg-clr-white "></div>
                </section>
                <section className="flex-1">
                    <h3 className="dark:text-clr-mint-green">{taskRemaining}</h3>
                    <p className="dark:text-clr-light-gray">Task Remaining</p>
                </section>
            </div>
            <hr className='w-full bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white' />
            <div className='grid grid-cols-1 mb-4'>
                <section>
                    <h3 className="dark:text-clr-mint-green mb-4">Courses</h3>
                    <div className="grid h-36 no-scrollbar overflow-y-scroll">
                        <div className='grid text-start gap-2 pb-4'>
                            {courses.length === 0 ? (
                                <EmptyState 
                                title="There are no courses" 
                                icon={LibraryBig} 
                              />
                            ) : (
                                courses.map((course) => (
                                    <p key={course.id} className="dark:text-clr-light-gray">• {course.title}</p>
                                ))
                            )}
                        </div>
                    </div>
                </section>
                <hr className='w-full bg-clr-blue h-1 mx-auto mb-4 dark:bg-clr-white' />
            </div>
        </div>
    );
}

CardTasks.propTypes = {
    taskCompleted: PropTypes.number.isRequired,
    taskRemaining: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object).isRequired
};

CardTasks.defaultProps = {
    taskCompleted: 5,
    taskRemaining: 35,
    courses: []
};