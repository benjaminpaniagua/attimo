// useActivities.js
import { useState, useEffect } from 'react';

const useActivities = (userId) => {
  const [activities, setActivities] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState(0);

  useEffect(() => {
    if (!userId) return; // No intentar fetch si no hay userId

    const fetchActivities = async () => {
      try {
        const response = await fetch(`http://attimobackend.test/api/activities/user/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActivities(data);

        // Calcular tareas restantes
        const incompleteTasks = data.filter(activity => activity.status !== 'Completed').length;
        setRemainingTasks(incompleteTasks);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, [userId]);

  return { activities, remainingTasks };
};

export default useActivities;
