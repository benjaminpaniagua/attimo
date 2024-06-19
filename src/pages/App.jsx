import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Sidebar from "../components/UI/Sidebar.jsx";
import {CourseDetails} from "./CourseDetails";
import {Events} from "./Events";
import {HomePage} from "./HomePage";
import {Statistics} from "./Statistics";
import Modal from 'react-modal';
import {courses} from "../pages/HomePage.jsx";
Modal.setAppElement('#root');

export const profileInfo = [
    {
        id: 1,
        img:"https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        name:"Ernesto",
        lastName1:"Jimenez",
        lastName2:"Castro",
        mail: "ernesto.jc@gmail.com",
        usr: "erne12",
        taskCompleted: 5,
        taskRemaining: 43,
        courses: courses
    }
];

export function App() {
    return (    
        <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full">
            <aside className="w-16">
                <Sidebar></Sidebar>
            </aside>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/courseDetails" element={<CourseDetails />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
