export default function ListActivities({ activities }) {
  return (
    <>
      <section>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center hover:bg-clr-light-bg dark:hover:bg-clr-dark-gray/30 transition duration-300 cursor-pointer rounded-lg p-4"
          >
            <div className="flex items-center hover:translate-x-4 transition duration-300 gap-4 w-full">
              <div className="overflow-hidden">
                <img
                  className="object-cover"
                  src={activity.image}
                  alt={activity.title}
                />
              </div>
              <div className="grid">
                <div className="flex flex-col justify-between">
                  <div className="w-full flex">
                    <h3 className="dark:text-clr-white">{activity.title} </h3>
                    {activity.percent && <h3 className="dark:text-clr-white">: {activity.percent}%</h3>}
                  </div>
                  <p className="dark:text-clr-light-gray">
                    {activity.date}, {activity.hour}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h3 className="flex justify-center dark:text-clr-white items-center hover:bg-clr-light-secondary-bg/70 dark:hover:bg-clr-dark-gray/35 transition-all duration-300 cursor-pointer rounded-lg p-4">View All</h3>
      </section>
    </>
  );
}
