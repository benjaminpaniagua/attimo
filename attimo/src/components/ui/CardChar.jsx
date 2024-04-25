import PropTypes from "prop-types";

export function CardChar({ input, char }) {
  return (
    <div className="card">
      <div>
        <h2>Hola Mundo</h2>
        <p>{input}</p>
      </div>
      <div>{char}</div>
    </div>
  );
}

CardChar.propTypes = {
    // title: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    char: PropTypes.node.isRequired,
};
