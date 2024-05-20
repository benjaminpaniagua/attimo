import "../../index.css";
import PropTypes from 'prop-types';

export function Task({ number, description, id }) {
  return (
    <>
        <h2 className="dark:text-white">{number}{id}</h2>
        <p className="dark:text-clr-light-gray">{description}</p>
    </>
  );
}

Task.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

Task.defaultProps = {
  number: 0,
  description: "Task",
  id: 0
}