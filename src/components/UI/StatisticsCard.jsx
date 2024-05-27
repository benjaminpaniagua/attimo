import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
import { User } from "lucide-react";

export function StatisticsCard({ description, number, icon: Icon}) {
    return (
        <div className="grid gap-4 bg-clr-white rounded-md py-[5rem] text-center dark:bg-clr-dark-third">
            <div className='p-4 bg-clr-light-secondary-bg/70 dark:bg-clr-dark-gray/30 rounded-full w-fit m-auto'><Icon size="38" className="mx-auto text-clr-blue dark:text-clr-light-gray stroke-[1.3]"/></div>
            <section>
                <h3 className='text-2xl font-medium dark:text-clr-white'>{number}</h3>
                <p className='dark:text-clr-light-gray'>{description}</p>
            </section>
        </div>
    );
}

StatisticsCard.propTypes = {
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    number: PropTypes.number.isRequired,
};

StatisticsCard.defaultProps = {
    description: "Total Users",
    number: 0,
    icon: User,
};