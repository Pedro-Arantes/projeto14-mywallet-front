
import GlobalStyle from "../style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import EntryPage from "../pages/EntryPage";
import OutputPage from "../pages/OutputPage";
import DataProvider from "../context/Auth";


export default function App() {


    return (
        <BrowserRouter>
            <GlobalStyle />
            <DataProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/novaEntrada" element={<EntryPage />} />
                    <Route path="/novaSaida" element={<OutputPage />} />
                </Routes>
            </DataProvider>

        </BrowserRouter>

    )
}

