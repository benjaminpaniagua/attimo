import { useEffect, useState } from "react";
import tailwindColors from '../../../tailwind.config.js';

export function useEventsReport(selectedOption) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState([]);
    const [totalActivities, setTotalActivities] = useState([]);
    const [activeActivities, setActiveActivities] = useState([]);
    const [inactiveActivities, setInactiveActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Colors for the chart
    const colors = [
        { id: 0, color: tailwindColors.theme.extend.colors['clr-dark-green'] },
        { id: 1, color: tailwindColors.theme.extend.colors['clr-blue'] },
        { id: 2, color: tailwindColors.theme.extend.colors['clr-dark-pink'] },
        { id: 3, color: tailwindColors.theme.extend.colors['clr-light-gray'] },
    ];

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                
                const response = await fetch(`http://attimobackend.test/api/activities/groups/count/${user.id}/${selectedOption}`);
                const result = await response.json();

                // Organize the data in descending order and filter out courses with no activities
                const sortedData = result.chartInfo
                    .filter(item => item.number_activities > 0)
                    .sort((a, b) => b.number_activities - a.number_activities);

                // Separate the "Others" group from the rest
                const others = sortedData.find(item => item.label === "Others");
                const courses = sortedData.filter(item => item.label !== "Others");

                // Get the top 3 courses
                const topCourses = courses.slice(0, 3);

                // Sum the activities of the remaining courses to "Others"
                let othersActivities = 0;
                if (others) {
                    othersActivities = others.number_activities;
                }
                const remainingCourses = courses.slice(3);
                const remainingActivities = remainingCourses.reduce((sum, course) => sum + course.number_activities, 0);
                othersActivities += remainingActivities;

                // Add the "Others" group if it has activities
                if (othersActivities > 0) {
                    topCourses.push({
                        group_id: 0,
                        label: "Others",
                        number_activities: othersActivities
                    });
                }

                // Create the data for the chart
                const chartData = topCourses.map((course, index) => ({
                    id: index,
                    value: course.number_activities,
                    label: course.label,
                    color: course.label === 'Others' ? colors[3].color : colors[index % colors.length].color,
                }));

                setData(chartData);
                setTotalActivities(result.totalActivities);
                setActiveActivities(result.activeActivities);
                setInactiveActivities(result.inactiveActivities);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedOption]); 

    return { data, isLoading, totalActivities, activeActivities, inactiveActivities};
}
