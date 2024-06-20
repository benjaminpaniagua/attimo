import { useEffect, useState } from "react";
import tailwindColors from '../../../tailwind.config.js';

export function useEventsReport(idUser) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const colors = [
        { id: 0, color: tailwindColors.theme.extend.colors['clr-dark-green'] },
        { id: 1, color: tailwindColors.theme.extend.colors['clr-blue'] },
        { id: 2, color: tailwindColors.theme.extend.colors['clr-dark-pink'] },
        { id: 3, color: tailwindColors.theme.extend.colors['clr-light-gray'] }, // Este es para "Others"
    ];

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`http://attimobackend.test/api/activities/groups/count/${idUser}`);
            const result = await response.json();
            
            // Ordena los cursos por número de actividades
            const sortedData = result.sort((a, b) => b.number_activities - a.number_activities);

            // Separa el "Others" del resto de los cursos
            const others = sortedData.find(item => item.label === "Others");
            const courses = sortedData.filter(item => item.label !== "Others");

            // Toma los tres cursos con más actividades
            const topCourses = courses.slice(0, 3);

            // Si "Others" tiene actividades, lo agrega al final
            if (others && others.number_activities > 0) {
            topCourses.push(others);
            }

            // Formatea los datos para el gráfico
            const chartData = topCourses.map((course, index) => ({
            id: index,
            value: course.number_activities,
            label: course.label,
            color: course.label === 'Others' ? colors[3].color : colors[index % colors.length].color, // Asigna el color correspondiente o gris para "Others"
            }));

            setData(chartData);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
        };

        fetchData();
    }, [idUser]);

    return { data, isLoading };
}
