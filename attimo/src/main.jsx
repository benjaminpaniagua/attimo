import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import Sidebar from "./components/UI/Sidebar.jsx";
import { Events } from "./pages/Events.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Statistics } from "./pages/Statistics.jsx";
import { Login } from "./pages/Login.jsx";
import { RecoverPassword } from "./pages/RecoverPassword.jsx";
import { Questions } from "./pages/Questions.jsx";
import { CourseDetails } from "./pages/CourseDetails.jsx";

export const profileInfo = [
  {
    key:1,
    img:"/imgs/usr-default.png",
    name:"Ernesto Jimenez",
    mail: "ernestin@gmail.com",
    usr: "erne12",
    taskCompleted:"5",
    taskRemaining:"43",
    courses:
    "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
  }
]

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
      <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full ">
        <aside className="w-16">
          <Sidebar username="usuario" email="email@gmail.com" image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg" items={profileInfo}></Sidebar>
        </aside>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="events" element={<Events />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
      </div>
    </BrowserRouter>
);
