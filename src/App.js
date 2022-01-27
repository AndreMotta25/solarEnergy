// generals
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// pages
import Login from "./pages/Login/Login";
import Dashboard from "./pages/DashBoard/Dashboard";
import Unidades from "./pages/Unidades/Unidades";
import CadastroDeUnidades from "./pages/CadastroDeUnidades/CadastroDeUnidades";
import MonthlyGeneration from "./pages/MonthlyGeneration/MonthlyGeneration";
// componentes
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/CadastroDeUnidades" element={<CadastroDeUnidades />} />
        <Route path="/monthlyGeneration" element={<MonthlyGeneration />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
