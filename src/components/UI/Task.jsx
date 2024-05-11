import "../../index.css";
export function Task({ number, description }) {
  return (
    <>
        <h2 className="dark:text-white">{number}</h2>
        <p className="dark:text-clr-light-gray">{description}</p>
    </>
  );
}
