import React from 'react';
import PropTypes from 'prop-types';

export function Task({ number, description }) {
  return (
    <>
      <h2 className="dark:text-white">{number}</h2>
      <p className="dark:text-clr-light-gray">{description}</p>
    </>
  );
}

Task.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

Task.defaultProps = {
  number: 0,
  description: "Task",
};

export default Task;
