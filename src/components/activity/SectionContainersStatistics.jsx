import React, { useEffect, useState } from 'react';
import { StatisticsCard } from '../UI/StatisticsCard.jsx';
import { Users, Dumbbell, Book, GraduationCap } from 'lucide-react';

export function StatisticsCards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('http://attimobackend.test/api/statistics');
        const stats = await response.json();

        const formattedData = [
          { id: 0, number: stats.totalUsers, description: "Total Users", icon: Users },
          { id: 1, number: stats.playSports, description: "Play Sports", icon: Dumbbell },
          { id: 2, number: stats.haveAccommodations, description: "Have accommodations", icon: Book },
          { id: 3, number: stats.haveScholarship, description: "Have a scholarship", icon: GraduationCap }
        ];

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 lg:grid-cols-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <StatisticsCard
            key={item.id}
            number={item.number}
            description={item.description}
            icon={item.icon}
          />
        ))
      )}
    </div>
  );
}
