import React from "react";
import ReactDOM from "react-dom/client";
import { Events } from "./pages/Events.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Statistics } from "./pages/Statistics.jsx";
import { Login } from "./pages/Login.jsx";
import { RecoverPassword } from "./pages/RecoverPassword.jsx";  
import { Questions } from "./pages/Questions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Statistics />
  </>
);
