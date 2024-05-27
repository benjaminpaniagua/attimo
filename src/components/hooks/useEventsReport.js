import { useEffect, useState } from "react";
import tailwindColors from '../../../tailwind.config.js';
import { courses } from '../../pages/HomePage.jsx';
import { events } from '../../pages/Events.jsx';

export function useEventsReport() {
    const [data, setData] = useState([]);

    const colors = [
        { id: 0, color: tailwindColors.theme.extend.colors['clr-dark-green'] },
        { id: 1, color: tailwindColors.theme.extend.colors['clr-blue'] },
        { id: 2, color: tailwindColors.theme.extend.colors['clr-dark-pink'] },
        { id: 3, color: tailwindColors.theme.extend.colors['clr-light-gray'] },
    ];

    useEffect(() => {
        // Count events per course
        const eventCounts = events.reduce((counts, event) => {
            if (event.course_id === 0) {
                counts['others'] = (counts['others'] || 0) + 1; // Initialize 'others' if it doesn't exist
            } else {
                counts[event.course_id] = (counts[event.course_id] || 0) + 1; // Initialize course_id if it doesn't exist
            }
            return counts;
        }, {});       

        // Adding how many events every course have
        const coursesWithEventCounts = courses.map(course => ({
            ...course,
            eventCount: eventCounts[course.id] || 0,
        }));

        if (courses.length > 3) {
            // Sort courses by the number of events and take the top three
            const topCourses = [...coursesWithEventCounts]
                .sort((a, b) => b.eventCount - a.eventCount)
                .slice(0, 3);
            
            // Add the "others" element to the array only if there are events in others
            if ((coursesWithEventCounts.filter(course => course.eventCount > 0).length > topCourses.length) || (eventCounts['others'] || 0) > 0) {
                const othersEventCount = coursesWithEventCounts.filter(course => course.eventCount > 0 && !topCourses.some(topCourse => topCourse.id === course.id)).length + (eventCounts['others'] || 0);
                topCourses.push({ title: 'Others', eventCount: othersEventCount });
            }

            // Map the array to generate data for the chart
            const newData = topCourses
                .filter(course => course.eventCount > 0) // Filter only courses with at least one event
                .map((course, index) => ({
                    id: index,
                    value: course.eventCount,
                    label: course.title,
                    color: course.title === 'Others' ? tailwindColors.theme.extend.colors['clr-light-gray'] : colors[index % colors.length].color, // Assign gray color if the label is "Others"
                }));
            setData(newData);
        } else {
            // Filter courses with at least one event
            const filteredCourses = coursesWithEventCounts.filter(course => course.eventCount > 0);

            // Sum the number of events for "others"
            const otherCoursesEventCount = (eventCounts['others'] || 0);

            // If there are events in "others", add them to the array only if not found in filteredCourses
            if (otherCoursesEventCount > 0 && !filteredCourses.some(course => course.title === 'Others')) {
                filteredCourses.push({ title: 'Others', eventCount: otherCoursesEventCount });
            }

            // Map the array to generate data for the chart
            const newData = filteredCourses.map((course, index) => ({
                id: index,
                value: course.eventCount,
                label: course.title,
                color: course.title === 'Others' ? tailwindColors.theme.extend.colors['clr-light-gray'] : colors[index % colors.length].color, // Assign gray color if the label is "Others"
            }));
            setData(newData);
        }
    }, [courses, events]);

    return data;
}
