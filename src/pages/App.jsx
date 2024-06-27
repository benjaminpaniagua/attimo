import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Sidebar from "../components/UI/Sidebar.jsx";
import { CourseDetails } from "./CourseDetails";
import { Events } from "./Events";
import { HomePage } from "./HomePage";
import { Statistics } from "./Statistics";
import { ActivityDetails } from "./ActivityDetails.jsx";
import { SelectedOptionProvider } from "../global/selectedOptionContext.jsx";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
    return (    
        <SelectedOptionProvider> 
            <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full">
                <aside className="w-16"><Sidebar/></aside>
                <Routes>
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/events" element={<Events/>} />
                    <Route path="/statistics" element={<Statistics/>} />
                    <Route path="/courseDetails" element={<CourseDetails/>} />
                    <Route path="/activityDetails" element={<ActivityDetails/>} />
                    <Route path="/*" element={<HomePage/>} />
                </Routes>
            </div>
        </SelectedOptionProvider>
    );
}

export default App;
