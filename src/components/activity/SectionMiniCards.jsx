import { Card } from "../UI/Card";
import PropTypes from "prop-types";

export function MiniCards({ items }) {
  return (
    <div className="flex gap-4 md:flex-col">
      {items.map(item => (
        <section key={item.id} className="w-1/2 grid content-center bg-clr-white dark:bg-clr-dark-third p-10 text-center justify-center rounded-lg md:w-full">
          <Card number={item.number} description={item.description}/>
        </section>
      ))}
    </div>
  );
}

MiniCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

MiniCards.defaultProps = {
  items: [],
};