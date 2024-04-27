export function CardSummary() {
  return (
    <div className="bg-clr-white rounded-lg p-10 mr-10 flex flex-col justify-center items-center">
      <h2>
        You have a <span className="text-clr-light-bg">full</span> week of
        events
      </h2>
      <div className="flex gap-16 mt-7 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-green mr-4"></div>
          <p>Light(0-5)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-blue mr-4"></div>
          <p>Busy(6-10)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-light-bg mr-4"></div>
          <p>Full(+10)</p>
        </div>
      </div>

      <div className="flex w-full mt-6">
        <div className="flex-1 h-4 bg-clr-dark-green rounded-l-lg"></div>
        <div className="flex-1 h-4 bg-clr-blue"></div>
        <div className="flex-1 h-4 bg-clr-light-bg rounded-r-lg"></div>
      </div>
    </div>
  );
}
