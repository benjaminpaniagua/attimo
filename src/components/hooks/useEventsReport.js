import { useEffect, useState } from "react";
import tailwindColors from '../../../tailwind.config.js';

export function useEventsReport(selectedOption) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Show the selected options in the console when they change
    useEffect(() => {
        console.log(`idUser: ${user.id}, selectedOption: ${selectedOption}`);
    }
    , [user.id, selectedOption]);

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
                
                // Organize the data in descending order
                const sortedData = result.sort((a, b) => b.number_activities - a.number_activities);

                // Separate the "Others" group from the rest
                const others = sortedData.find(item => item.label === "Others");
                const courses = sortedData.filter(item => item.label !== "Others");

                // Get the top 3 courses
                const topCourses = courses.slice(0, 3);

                // Add the "Others" group if it exists
                if (others && others.number_activities > 0) {
                    topCourses.push(others);
                }

                // Create the data for the chart
                const chartData = topCourses.map((course, index) => ({
                    id: index,
                    value: course.number_activities,
                    label: course.label,
                    color: course.label === 'Others' ? colors[3].color : colors[index % colors.length].color,
                }));

                setData(chartData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedOption]); // Dependencias: idUser y selectedOption

    return { data, isLoading };
}
