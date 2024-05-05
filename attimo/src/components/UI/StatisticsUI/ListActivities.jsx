export default function ListActivities({ activities }) {
  return (
    <>
      <section>
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center hover:bg-clr-light-bg transition duration-300 cursor-pointer rounded-lg p-4">
          <div className="overflow-hidden mr-4">
            <img
              className="object-cover"
              src={activity.image}
              alt={activity.title}
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-between">
              <h3>{activity.title}</h3>
              <p>
                {activity.date}, {activity.hour}
              </p>
              {activity.percent && <h3>{activity.percent}%</h3>}
            </div>
          </div>
        </div>
        ))}
        <h3 className="flex justify-center items-center hover:bg-clr-light-gray transition duration-300 cursor-pointer rounded-lg p-4">View All</h3>
      </section>
    </>
  );
}
