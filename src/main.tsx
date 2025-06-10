import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Styles/index.css";
import { Portafolio } from "./portafolio/Portafolio";
import { Login } from "./Login";
import Perfil from "./Perfil";
import { Layout } from "./portafolio/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />} > 
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
