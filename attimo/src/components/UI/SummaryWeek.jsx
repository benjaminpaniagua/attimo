export function SummaryWeek() {
  return (
    <>
      <div className="flex gap-8 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-green mr-2"></div>
          <p>Light(0-5)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-blue mr-2"></div>
          <p>Busy(6-10)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-pink mr-2"></div>
          <p>Full(+10)</p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex-1 h-4 bg-clr-dark-green rounded-l-lg"></div>
        <div className="flex-1 h-4 bg-clr-blue"></div>
        <div className="flex-1 h-4 bg-clr-dark-pink rounded-r-lg"></div>
      </div>
    </>
  );
}
