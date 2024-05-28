import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import {Sidebar} from "../components/UI/Sidebar";
import {CourseDetails} from "../pages/CourseDetails";
import {Events} from "../pages/Events";
import {HomePage} from "../pages/HomePage";
import {Statistics} from "../pages/Statistics";
import Modal from 'react-modal';
import Modal from 'react-modal';
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
        <BrowserRouter> 
        <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full ">
            <aside className="w-16">
                <Sidebar username={profileInfo[0].usr} email={profileInfo[0].mail} image={profileInfo[0].img} items={profileInfo}></Sidebar>
            </aside>
                <Routes>
                <Route path="/" element={<HomePage name={profileInfo[0].name} />} />
                <Route path="events" element={<Events />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="/*" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
