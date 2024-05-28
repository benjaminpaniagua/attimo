import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Login } from "./pages/Login.jsx";
import { RecoverPassword } from "./pages/RecoverPassword.jsx";
import { Questions } from "./pages/Questions.jsx";
import { App } from "./pages/App.jsx";

  ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Questions" element={<Questions />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/attimo/*" element={<App />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
