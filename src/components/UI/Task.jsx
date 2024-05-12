import "../../index.css";
export function Task({ number, description, id }) {
  return (
    <>
        <h2 className="dark:text-white">{number}{id}</h2>
        <p className="dark:text-clr-light-gray">{description}</p>
    </>
  );
}
