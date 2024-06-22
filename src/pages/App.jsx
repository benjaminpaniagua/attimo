import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Sidebar from "../components/UI/Sidebar.jsx";
import { CourseDetails } from "./CourseDetails";
import { Events } from "./Events";
import { HomePage } from "./HomePage";
import { Statistics } from "./Statistics";
import { SelectedOptionProvider } from "../global/selectedOptionContext.jsx";
import ProtectedRoute from "../global/ProtectedRoute.jsx";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
    return (    
        <SelectedOptionProvider> 
            <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full">
                <aside className="w-16"><Sidebar/></aside>
                <Routes>
                    <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
                    <Route path="/events" element={<ProtectedRoute><Events/></ProtectedRoute>} />
                    <Route path="/statistics" element={<ProtectedRoute><Statistics/></ProtectedRoute>} />
                    <Route path="/courseDetails" element={<ProtectedRoute><CourseDetails/></ProtectedRoute>} />
                    <Route path="/*" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
                </Routes>
            </div>
        </SelectedOptionProvider>
    );
}

export default App;
