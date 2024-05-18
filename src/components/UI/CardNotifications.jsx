import PropTypes from "prop-types";

export function CardNotifications({
  mandated,
  mandatedImg,
  description,
  time,
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <img
          className="w-14  rounded-lg"
          src={`${mandatedImg}`}
          alt={description}
        />
        <div className="grid">
          <h3>
            <span className="font-bold">{mandated} </span>
            {description}
          </h3>
          <p>{time}</p>
        </div>
        </div>
      <hr className="border-t-2 border-clr-light-gray my-2" />
    </>
  );
}

