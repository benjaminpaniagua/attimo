import { useEffect, useState } from "react";

export const useFetchGroupActivities = (groupId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://attimobackend.test/api/activities/group/${groupId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (groupId) {
      getData();
    }
  }, [groupId]);

  return { data, isLoading, error };
};
