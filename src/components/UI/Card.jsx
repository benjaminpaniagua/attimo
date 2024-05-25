import "../../../index.css";
import propTypes from "prop-types";
export function Card({ number, description }) {
  return (
    <>
        <h2 className="dark:text-white">{number}</h2>
        <p className="dark:text-clr-light-gray">{description}</p>
    </>
  );
}

Card.propTypes = {
    number: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
};

Card.defaultProps = {
    number: 0,
    description: "This is a card description"
};